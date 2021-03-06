const db = require("../config/mongodb-connection");
const collections = require("../config/mongodb-collections");
const CryptoJS = require("crypto-js");
const bcrypt = require("bcryptjs");
const encKey = "secure memo key";
const { v4: uuidv4 } = require("uuid");

var decUnSaltStr = (str) => {
  return CryptoJS.AES.decrypt(str, encKey, {
    iv: { words: [0, 0, 0, 0], sigBytes: 16 },
  }).toString();
};

var decryptToOrgStr = (str) => {
  return new Promise((resolve, reject) => {
    let decStr = "";
    decStr = CryptoJS.AES.decrypt(str, encKey).toString(CryptoJS.enc.Utf8);
    decStr = decStr.replace(/['"]+/g, "");
    resolve(decStr);
  });
};

var decryptToOrgObj = (obj) => {
  return new Promise((resolve, reject) => {
    let decObj = {};
    Object.keys(obj).map((itm) => {
      decObj[itm] = CryptoJS.AES.decrypt(obj[itm], encKey).toString(
        CryptoJS.enc.Utf8
      );
      decObj[itm] = decObj[itm].replace(/['"]+/g, "");
    });
    resolve(decObj);
  });
};

var encryptObj = (obj) => {
  return new Promise((resolve, reject) => {
    let encObj = {};
    Object.keys(obj).map((itm) => {
      encObj[itm] = CryptoJS.AES.encrypt(obj[itm], encKey).toString();
    });
    resolve(encObj);
  });
};

var encUnSaltStr = (str) => {
  return CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(encKey), {
    iv: { words: [0, 0, 0, 0], sigBytes: 16 },
  }).toString();
};

module.exports = {
  signUpUser: (userData) => {
    return new Promise((resolve, reject) => {
      decryptToOrgStr(userData.password).then(async (password) => {
        userData.password = password;
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.userId = uuidv4();
        db.get()
          .collection(collections.USERS_COLLECTION)
          .findOne({ email: userData.email })
          .then((userExist) => {
            if (userExist) {
              resolve({ status: false, errorMsg: "Email already exist..!" });
            } else {
              db.get()
                .collection(collections.USERS_COLLECTION)
                .insertOne(userData)
                .then(() => {
                  resolve({
                    status: true,
                    userData: {
                      userId: userData.userId,
                      userEmail: userData.email,
                    },
                  });
                });
            }
          });
      });
    });
  },
  signInUser: (userData) => {
    return new Promise(async (resolve, reject) => {
      let userEmail = userData.email;
      delete userData.email;
      userData = await decryptToOrgObj(userData);
      userData.email = userEmail;
      db.get()
        .collection(collections.USERS_COLLECTION)
        .findOne({ email: userData.email })
        .then(async (userExist) => {
          if (userExist) {
            if (await bcrypt.compare(userData.password, userExist.password)) {
              resolve({
                status: true,
                userData: {
                  userId: userExist.userId,
                  userEmail: userData.email,
                },
              });
            } else {
              resolve({ status: false, errorMsg: "Incorrect password!" });
            }
          } else {
            resolve({ status: false, errorMsg: "User not found!" });
          }
        });
    });
  },
  getUserData: (userId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.USERS_COLLECTION)
        .findOne({ userId: userId })
        .then(async (userData) => {
          let userEmail = userData.userEmail;
          let userPassword = userData.password;
          let userId = userData.userId;
          delete userData.userId;
          delete userData.password;
          delete userData.email;
          delete userData._id;
          userData = await decryptToOrgObj(userData);
          resolve(userData);
        });
    });
  },
  createUserMemo: (memoData) => {
    return new Promise(async (resolve, reject) => {
      var userId = memoData.userId;
      var memoType = await decryptToOrgStr(memoData.memoType);
      var userEmail = memoData.userEmail;
      delete memoData.userId;
      delete memoData.userEmail;
      memoData.memoDate = new Date();
      memoData.memoId = uuidv4();
      db.get()
        .collection(collections.MEMOS_COLLECTION)
        .findOne({ userId: userId })
        .then((userMemosExist) => {
          if (userMemosExist) {
            var memoArray = "userMemos." + memoType;
            db.get()
              .collection(collections.MEMOS_COLLECTION)
              .updateOne(
                { userId: userId },
                {
                  $push: { [memoArray]: memoData },
                }
              )
              .then(() => {
                resolve({ status: true, firstMemo: false });
              });
          } else {
            var tempObj = {
              userId: userId,
              userMemos: {
                allMemos: new Array(),
                hiddenMemos: new Array(),
                secureMemos: new Array(),
              },
            };
            tempObj.userMemos[memoType].push(memoData);
            db.get()
              .collection(collections.MEMOS_COLLECTION)
              .insertOne(tempObj)
              .then(() => {
                resolve({ status: true, firstMemo: true });
              });
          }
        });
    });
  },
  getUserMemos: (memoData) => {
    return new Promise((resolve, reject) => {
      var userId = memoData.userId;
      var memoType = memoData.memoType;
      db.get()
        .collection(collections.MEMOS_COLLECTION)
        .findOne({ userId: userId })
        .then((userMemoData) => {
          console.log(userMemoData);
          if (userMemoData == null) {
            resolve([]);
          } else {
            const sortedArray = userMemoData.userMemos[memoType].sort(
              (a, b) => a.memoDate - b.memoDate
            );
            resolve(sortedArray);
          }
        });
    });
  },
  getUserMemo: (memoDeta) => {
    return new Promise(async (resolve, reject) => {
      var memosArray = "userMemos." + memoDeta.memoType;
      var memoDoc = `userMemos.${memoDeta.memoType}.memoId`;
      db.get()
        .collection(collections.MEMOS_COLLECTION)
        .aggregate([
          { $match: { userId: memoDeta.userId } },
          { $unwind: "$" + memosArray },
          {
            $match: {
              [memoDoc]: memoDeta.memoId,
            },
          },
          { $project: { _id: 0, [memosArray]: 1 } },
        ])
        .toArray()
        .then((memoData) => {
          resolve(memoData[0].userMemos.allMemos);
        });
    });
  },
  deleteUserMemo: (memoData) => {
    return new Promise((resolve, reject) => {
      var memoArray = "userMemos." + memoData.memoType;
      db.get()
        .collection(collections.MEMOS_COLLECTION)
        .updateOne(
          { userId: memoData.userId },
          {
            $pull: { [memoArray]: { memoId: memoData.memoId } },
          }
        )
        .then(() => {
          resolve({ status: true });
        });
    });
  },
  updateUserMemo: (memoData) => {
    console.log(memoData);
    return new Promise(async (resolve, reject) => {
      var memoId = memoData.memoId;
      delete memoData.memoId;
      delete memoData.userEmail;
      memoData.memoDate = new Date();
      var memoTypeOnArr = await decryptToOrgStr(memoData.memoType);
      let modified = `userMemos.${memoTypeOnArr}.$[elem].modified`;
      let memoType = `userMemos.${memoTypeOnArr}.$[elem].memoType`;
      let memoTitle = `userMemos.${memoTypeOnArr}.$[elem].memoTitle`;
      let memoDate = `userMemos.${memoTypeOnArr}.$[elem].memoDate`;
      let memoBody = `userMemos.${memoTypeOnArr}.$[elem].memoBody`;
      let memoid = `userMemos.${memoTypeOnArr}.$[elem].memoId`;
      db.get()
        .collection(collections.MEMOS_COLLECTION)
        .updateOne(
          { userId: memoData.userId },
          {
            $set: {
              [modified]: memoData.modified,
              [memoType]: memoData.memoType,
              [memoTitle]: memoData.memoTitle,
              [memoDate]: memoData.memoDate,
              [memoBody]: memoData.memoBody,
              [memoid]: memoId,
            },
          },
          {
            arrayFilters: [{ "elem.memoId": memoId }],
          }
        )
        .then(() => {
          resolve({ status: true });
        });
    });
  },
};

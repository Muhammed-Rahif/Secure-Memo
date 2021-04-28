const db = require("../config/mongodb-connnection");
const collections = require("../config/mongodb-collections");
const CryptoJS = require("crypto-js");
const bcrypt = require("bcryptjs");
const encKey = "secure memo key";
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = require("bson");

decryptToOrgStr = (str) => {
  return new Promise((resolve, reject) => {
    let decStr = "";
    decStr = CryptoJS.AES.decrypt(str, encKey).toString(CryptoJS.enc.Utf8);
    decStr = decStr.replace(/['"]+/g, "");
    console.log(decStr);
    resolve(decStr);
  });
};

decryptToOrgObj = (obj) => {
  return new Promise((resolve, reject) => {
    let decObj = {};
    Object.keys(obj).map((itm) => {
      console.log(obj[itm]);
      decObj[itm] = CryptoJS.AES.decrypt(obj[itm], encKey).toString(
        CryptoJS.enc.Utf8
      );
      decObj[itm] = decObj[itm].replace(/['"]+/g, "");
    });
    resolve(decObj);
  });
};

encryptObj = (obj) => {
  return new Promise((resolve, reject) => {
    let encObj = {};
    Object.keys(obj).map((itm) => {
      encObj[itm] = CryptoJS.AES.encrypt(obj[itm], encKey).toString();
    });
    resolve(encObj);
  });
};

module.exports = {
  signUpUser: (userData) => {
    return new Promise((resolve, reject) => {
      decryptToOrgStr(userData.password).then(async (password) => {
        userData.password = password;
        userData.email = await decryptToOrgStr(userData.email);
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
      userData = await decryptToOrgObj(userData);
      db.get()
        .collection(collections.USERS_COLLECTION)
        .findOne({ email: userData.email })
        .then(async (userExist) => {
          console.log(userExist);
          if (userExist) {
            console.log(userExist.password);
            console.log(userData.password);
            console.log(
              await bcrypt.compare(userData.password, userExist.password)
            );
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
        .then((userData) => {
          resolve(userData);
        });
    });
  },
};

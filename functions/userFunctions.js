const db = require("../config/mongodb-connnection");
const collections = require("../config/mongodb-collections");
const CryptoJS = require("crypto-js");
const bcrypt = require("bcryptjs");
const encKey = "secure memo key";

module.exports = {
  decryptToOrgObj: (obj) => {
    return new Promise((resolve, reject) => {
      let decObj = {};
      Object.keys(obj).map(async (itm) => {
        console.log(obj[itm]);
        decObj[itm] = CryptoJS.AES.decrypt(obj[itm], encKey).toString(
          CryptoJS.enc.Utf8
        );
        decObj[itm] = decObj[itm].replace(/['"]+/g, "");
      });
      resolve(decObj);
    });
  },
  signUpUser: (userData) => {
    return new Promise(async(resolve, reject) => {
      userData.password = await bcrypt.hash(userData.password, 10);
      db.get()
        .collection(collections.USERS_COLLECTION)
        .insertOne(userData)
        .then(() => {
          resolve();
        });
    });
  },
};

/*
 * @Author: your name
 * @Date: 2022-01-10 15:22:33
 * @LastEditTime: 2022-01-20 16:27:47
 * @LastEditors: Please set LastEditors
 * @Description: 数据库操作封装
 * @FilePath: \graphql_demo\src\db\connect.js
 */
const { MongoClient } = require("mongodb");
const { DB_URL, DEFAULT_BASE } = require("./setting");

let mongoClient;
if (!mongoClient) {
  mongoClient = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
/**
 * @description: 数据库连接
 * @param {*} callback
 * @return {*}
 */
function _connectDB(callback) {
  mongoClient.connect((err, db) => {
    if (err) {
      console.log(`数据库连接出错: ${err}`);
      callback(err, null);
      return;
    }
    callback(err, db.db(DEFAULT_BASE));
  });
}

/**
 * @description: 查询数据，如果成功则返回一个数组
 * @param {*} collectionName
 * @param {*} data
 * @param {*} callback
 * @return {*}
 */
exports.find = function (collectionName, data, callback) {
  _connectDB((err, db) => {
    db.collection(collectionName)
      .find(data)
      .toArray((err, result) => {
        if (err) {
          throw err;
        }
        callback(result);
      });
  });
};

/**
 * @description: 查询数据，如果成功则返回一个数组
 * @param {*} collectionName
 * @param {*} data
 * @param {*} callback
 * @return {*}
 */
exports.findOne = function (collectionName, data, callback) {
  _connectDB((err, db) =>
    db.collection(collectionName).findOne(data, (err, result) => {
      if (err) throw err;
      callback(result);
    })
  );
};

/**
 * @description: 插入一条数据，如果成功就把插入的数据返回
 * @param {*} collectionName
 * @param {*} data
 * @param {*} callback
 * @return {*}
 */
exports.insertOne = function (collectionName, data, callback) {
  _connectDB((err, db) =>
    db.collection(collectionName).insertOne(data, (err, result) => {
      if (err) throw err;
      callback(data);
    })
  );
};

/**
 * @description: 删除单个用户，如果成功就把删除的用户返回
 * @param {*} collectionName
 * @param {*} data
 * @param {*} callback
 * @return {*}
 */
exports.deleteOne = function (collectionName, data, callback) {
  _connectDB((err, db) =>
    db.collection(collectionName).deleteOne(data, (err, results) => {
      if (err) throw err;
      callback(data);
    })
  );
};

/**
 * @description: 更新单个用户，如果成功把更改之后的用户信息返回
 * @param {*} collectionName
 * @param {*} data
 * @param {*} targ
 * @param {*} callback
 * @return {*}
 */
exports.updateOne = function (collectionName, data, targ, callback) {
  _connectDB((err, db) =>
    db.collection(collectionName).updateOne(data, targ, (err, results) => {
      if (err) throw err;
      callback(targ["$set"]);
    })
  );
};

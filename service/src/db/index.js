/*
 * @Author: your name
 * @Date: 2022-01-10 15:22:41
 * @LastEditTime: 2022-01-14 12:06:52
 * @LastEditors: Please set LastEditors
 * @Description: DAO层
 * @FilePath: \graphql_demo\src\db\index.js
 */
const DBConn = require("./connect");

const DB_USERS = "users";

/**
 * @description: 用户查询
 * @param {*}
 * @return {*}
 */
const findUsers = (data) => new Promise((resolve) => DBConn.find(DB_USERS, data, resolve));

/**
 * @description: 单个用户查询
 * @param {*}
 * @return {*}
 */
const findUser = (data) => new Promise((resolve) => DBConn.findOne(DB_USERS, data, resolve));

/**
 * @description: 创建用户
 * @param {*}
 * @return {*}
 */
const createUser = ({ id, name, email, age, gender }) =>
  new Promise((resolve) => DBConn.insertOne(DB_USERS, { id, name, email, age, gender }, resolve));

/**
 * @description: 删除用户
 * @param {*}
 * @return {*}
 */
const deleteUser = ({ id }) => new Promise((resolve) => DBConn.deleteOne(DB_USERS, { id }, resolve));

/**
 * @description: 更新用户
 * @param {*}
 * @return {*}
 */
const updateUser = ({ id, name, email, age, gender }) =>
  new Promise((resolve) => DBConn.updateOne(DB_USERS, { id }, { $set: { id, name, email, age, gender } }, resolve));

module.exports = {
  users: findUsers,
  user: findUser,
  createUser,
  deleteUser,
  updateUser,
};

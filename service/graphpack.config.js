/*
 * @Author: your name
 * @Date: 2022-01-17 16:23:09
 * @LastEditTime: 2022-01-18 10:21:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\graphpack.config.js
 */
const express = require("express");
const app = express();

module.exports = {
  server: {
    applyMiddleware: {
      app,
      path: "/graphql", // default
    },
  },
};

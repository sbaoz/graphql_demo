/*
 * @Author: your name
 * @Date: 2022-01-14 11:29:24
 * @LastEditTime: 2022-01-14 11:29:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\src\resolvers\Query.js
 */
import DB from "../db";

export default {
  Query: {
    users: (parent, args) => DB.users({}),
    user: (parent, { id }) => DB.user({ id }),
  },
};

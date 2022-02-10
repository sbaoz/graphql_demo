/*
 * @Author: your name
 * @Date: 2022-01-14 10:23:28
 * @LastEditTime: 2022-01-25 11:22:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\src\resolvers\Mutation.js
 */
import DB from "../db";

export default {
  Mutation: {
    createUser: (parent, { id, name, email, age, gender }) =>
      DB.user({ id })
        .then((existUser) => {
          if (existUser) throw new Error("已经有这个id的人了");
        })
        .then(() => DB.createUser({ id, name, email, age, gender })),
    updateUser: (parent, { id, name, email, age, gender }) =>
      DB.user({ id })
        .then((existUser) => {
          if (!existUser) throw new Error("没有这个id的人");
          return existUser;
        })
        .then(() => DB.updateUser({ id, name, email, age, gender })),
    deleteUser: (parent, { id }) =>
      DB.user({ id })
        .then((existUser) => {
          if (!existUser) throw new Error("没有这个id的人");
          return existUser;
        })
        .then((user) => new Promise((resolve) => DB.deleteUser(user).then((_) => resolve(user)))),
  },
};

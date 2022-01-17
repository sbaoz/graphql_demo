/*
 * @Author: your name
 * @Date: 2022-01-14 13:25:14
 * @LastEditTime: 2022-01-17 11:12:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\src\resolvers\Subscription.js
 */
import DB from "../db";

const { PubSub, withFilter } = require("apollo-server");
const pubsub = new PubSub();

const USER_UPDATE_CHANNEL = "USER_UPDATE";

export default {
  Mutation: {
    updateUser: (parent, { id, name, email, age, gender }) =>
      DB.user({ id })
        .then((existUser) => {
          if (!existUser) throw new Error("没有这个id的人");
          return existUser;
        })
        .then(() => DB.updateUser({ id, name, email, age, gender }))
        .then((user) => {
          pubsub.publish(USER_UPDATE_CHANNEL, { subsUser: user });
          return user;
        }),
  },
  Subscription: {
    subsUser: {
      subscribe: withFilter(
        (parent, { id }) => pubsub.asyncIterator(USER_UPDATE_CHANNEL),
        (payload, variables) => payload.subsUser.id === variables.id
      ),
      resolve: (payload, variables) => {
        console.log("接收到数据： ", payload);
        return payload.subsUser;
      },
    },
  },
};

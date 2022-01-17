/*
 * @Author: your name
 * @Date: 2022-01-10 15:28:29
 * @LastEditTime: 2022-01-17 17:39:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\src\resolvers\index.js
 */
import merge from "lodash/merge";
import Hello from "./Hello";
import Query from "./Query";
import Mutation from "./Mutation";
import Subscription from "./Subscription";

const PureObj = Object.create(null);

const mergedObj = merge(PureObj, Hello, Query, Mutation, Subscription);

export default mergedObj;

/*
 * @Author: your name
 * @Date: 2022-01-10 15:28:29
 * @LastEditTime: 2022-01-14 11:29:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\src\resolvers\index.js
 */
import merge from "lodash/merge";
import Hello from "./Hello";
import Query from "./Query.js";
import Mutation from "./Mutation.js";

const PureObj = Object.create(null);

export default merge(PureObj, Hello, Query, Mutation);

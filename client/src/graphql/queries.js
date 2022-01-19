/*
 * @Author: your name
 * @Date: 2022-01-19 14:43:39
 * @LastEditTime: 2022-01-19 14:43:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\graphql\queries.js
 */
import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      age
      gender
      email
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: String) {
    user(id: $id) {
      id
      name
      age
      gender
      email
    }
  }
`;

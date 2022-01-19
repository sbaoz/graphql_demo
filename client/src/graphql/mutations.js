/*
 * @Author: your name
 * @Date: 2022-01-19 14:43:50
 * @LastEditTime: 2022-01-19 15:39:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\graphql\mutations.js
 */
import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($id: ID!, $name: String!, $email: String!, $age: Int, $gender: Gender) {
    createUser(id: $id, name: $name, email: $email, age: $age, gender: $gender) {
      id
      name
      email
      age
      gender
    }
  }
`;

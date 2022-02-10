/*
 * @Author: your name
 * @Date: 2022-01-19 14:43:50
 * @LastEditTime: 2022-01-26 10:09:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\graphql\mutations.js
 */
import { gql } from "@apollo/client";

const CREATE_USER = gql`
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

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $email: String, $age: Int, $gender: Gender) {
    updateUser(id: $id, name: $name, email: $email, age: $age, gender: $gender) {
      id
      name
      email
      age
      gender
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      age
      gender
    }
  }
`;

export default {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
};

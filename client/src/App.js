/*
 * @Author: your name
 * @Date: 2022-01-18 14:27:59
 * @LastEditTime: 2022-01-26 14:17:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\App.js
 */
import { useState } from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import graphql from "./graphql";
import UserInfo from "./components/UserInfo";
import DelayedQuery from "./components/DelayedQuery";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  const [selData, setSelData] = useState({});
  const { data: userList, refetch: usersRefetch } = useQuery(graphql.GET_USERS, {
    pollInterval: 0, // 轮询间隔
    notifyOnNetworkStatusChange: true, // 监听refetch时的请求状态变化
    fetchPolicy: "network-only", // 第一次执行请求时的策略 不查看数据是否在本地缓存中存在 默认"cache-first"
    nextFetchPolicy: "cache-first", // 执行未来的请求时的策略
  });
  const [getUser, { data: lazyData }] = useLazyQuery(graphql.GET_USER);
  const { data: userData } = useQuery(graphql.GET_USER, {
    variables: {
      id: "1",
    },
  });
  const [deleteUser] = useMutation(graphql.DELETE_USER, {
    refetchQueries: [graphql.GET_USERS],
    onCompleted: (data) => {
      console.log(data);
    },
  });
  const [createUser, { reset }] = useMutation(graphql.CREATE_USER, {
    variables: {
      name: "王老五",
      email: "laowu@xxx.com",
    }, // 可以配置默认值 会和createUser函数中的参数做浅合并 createUser函数中的参数优先级高
    onError: (error) => {
      console.log(error);
    },
    refetchQueries: [graphql.GET_USERS, "GetUsers"], // 数据改变之后 触发特定的请求
    update(cache, { data: { createUser } }) {
      cache.modify({
        fields: {
          users(existingUsers = []) {
            const newUserRef = cache.writeFragment({
              data: createUser,
              fragment: gql`
                fragment NewUser on User {
                  id
                  name
                  age
                  gender
                  email
                }
              `,
            });
            return [...existingUsers, createUser];
          },
        },
      });
    }, // 数据改变之后 不触发请求 手动修改缓存中的数据 改动后的数据会自动广播到侦听的查询
    onQueryUpdated(observableQuery) {
      if (observableQuery.queryName === "GetUsers") {
        return observableQuery.refetch();
      } else {
        console.log(observableQuery.queryName);
      }
    }, // 控制数据改变之后是否要重新请求数据 可以搭配refetchQueries使用（没看明白怎么搭配）
  });
  const [updateUser] = useMutation(graphql.UPDATE_USER);

  const handleGetUser = (id) => {
    getUser({ variables: { id } });
  };
  const handleCreateUser = (variables) => {
    createUser({ variables });
  };
  const handleUpdateUser = (variables) => {
    updateUser({ variables });
  };
  const handleDeleteUser = (id) => {
    deleteUser({ variables: { id } });
  };
  const handleUserRefetch = () => {
    usersRefetch();
  };

  return (
    <div className="App">
      <h2>My First Apollo App</h2>
      <UserInfo
        clsName="demo-item"
        userList={userList}
        usersRefetch={handleUserRefetch}
        deleteUser={handleDeleteUser}
        setSelData={(data) => {
          if (selData && selData.id === data.id) {
            setSelData({});
          } else {
            setSelData(data);
          }
        }}
        selData={selData}
      />
      <DelayedQuery clsName="demo-item" userData={userData} lazyData={lazyData} queryUserData={handleGetUser} />
      <UserForm clsName="demo-item" createUser={handleCreateUser} updateUser={handleUpdateUser} selData={selData} />
    </div>
  );
}

export default App;

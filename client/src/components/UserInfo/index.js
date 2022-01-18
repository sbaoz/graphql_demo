/*
 * @Author: your name
 * @Date: 2022-01-18 16:50:43
 * @LastEditTime: 2022-01-18 17:46:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\UserInfo\index.js
 */
import { gql, useQuery, NetworkStatus } from "@apollo/client";

const USER_INFO = gql`
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

export default function UserInfo() {
  const { loading, error, data, refetch, networkStatus } = useQuery(USER_INFO, {
    pollInterval: 0, // 轮询间隔
    notifyOnNetworkStatusChange: true, // 监听refetch时的请求状态变化
  });
  if (networkStatus === NetworkStatus.refetch) return <p>Refetching!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      {data.users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} - {user.age} - {user.gender} - {user.email}
          </p>
        </div>
      ))}
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
}

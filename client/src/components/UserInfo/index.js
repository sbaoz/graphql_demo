/*
 * @Author: your name
 * @Date: 2022-01-18 16:50:43
 * @LastEditTime: 2022-01-19 14:24:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\UserInfo\index.js
 */
import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries";

export default function UserInfo(props) {
  const { clsName } = props;
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_USERS, {
    pollInterval: 0, // 轮询间隔
    notifyOnNetworkStatusChange: true, // 监听refetch时的请求状态变化
    fetchPolicy: "network-only", // 第一次执行请求时的策略 不查看数据是否在本地缓存中存在 默认"cache-first"
    nextFetchPolicy: "cache-first", // 执行未来的请求时的策略
  });
  if (networkStatus === NetworkStatus.refetch) return <p>Refetching!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div className={clsName}>
      <h4>useQuery</h4>
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

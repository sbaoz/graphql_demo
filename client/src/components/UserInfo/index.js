/*
 * @Author: your name
 * @Date: 2022-01-18 16:50:43
 * @LastEditTime: 2022-01-26 14:16:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\UserInfo\index.js
 */

export default function UserInfo(props) {
  const { clsName, userList, usersRefetch, deleteUser, selData, setSelData } = props;
  // if (networkStatus === NetworkStatus.refetch) return <p>Refetching!</p>;
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error {error.message}</p>;

  return (
    <div className={clsName}>
      <h4>useQuery</h4>
      {userList?.users.map((user) => (
        <div
          key={user.id}
          onClick={() => setSelData(user)}
          style={{ border: selData && selData.id === user.id ? "1px solid" : "" }}
        >
          <p>
            {user.id} - {user.name} - {user.age} - {user.gender} - {user.email} -{" "}
            <button style={{ display: "inline-block" }} onClick={() => deleteUser && deleteUser(user.id)}>
              Delete
            </button>
          </p>
        </div>
      ))}
      <button onClick={() => usersRefetch && usersRefetch()}>Refetch</button>
    </div>
  );
}

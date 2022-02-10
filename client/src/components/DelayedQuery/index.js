/*
 * @Author: your name
 * @Date: 2022-01-19 13:52:24
 * @LastEditTime: 2022-01-26 13:48:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\DelayedQuery\index.js
 */
import { useState } from "react";
export default function DelayedQuery(props) {
  const { clsName, userData, lazyData, queryUserData } = props;
  const [userId, setUserId] = useState("");
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };
  const doSearchUserById = () => {
    queryUserData(userId);
  };
  return (
    <div className={clsName}>
      <h4>useLazyQuery</h4>
      {userData?.user && <p>useQuery: {userData.user.name}</p>}
      <input type="text" value={userId} onChange={handleUserIdChange} />
      {lazyData?.user && (
        <p>
          useLazyQuery: {lazyData.user.id} - {lazyData.user.name}
        </p>
      )}
      <button onClick={doSearchUserById}>Search</button>
    </div>
  );
}

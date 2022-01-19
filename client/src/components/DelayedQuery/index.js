/*
 * @Author: your name
 * @Date: 2022-01-19 13:52:24
 * @LastEditTime: 2022-01-19 14:45:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\DelayedQuery\index.js
 */
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";

export default function DelayedQuery(props) {
  const { clsName } = props;
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className={clsName}>
      <h4>useLazyQuery</h4>
      {data?.user && <p>{data.user.name}</p>}
      <button onClick={() => getUser({ variables: { id: "2" } })}>Click</button>
    </div>
  );
}

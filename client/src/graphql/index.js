/*
 * @Author: your name
 * @Date: 2022-01-20 10:44:34
 * @LastEditTime: 2022-01-20 10:53:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /graphql_demo/client/src/graphql/index.js
 */
import mutations from "./mutations";
import queries from "./queries";

export default { ...mutations, ...queries };

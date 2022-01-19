/*
 * @Author: your name
 * @Date: 2022-01-18 14:27:59
 * @LastEditTime: 2022-01-19 15:28:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\App.js
 */
import UserInfo from "./components/UserInfo";
import DelayedQuery from "./components/DelayedQuery";
import "./App.css";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <h2>My First Apollo App</h2>
      <UserInfo clsName="demo-item" />
      <DelayedQuery clsName="demo-item" />
      <CreateUser clsName="demo-item" />
    </div>
  );
}

export default App;

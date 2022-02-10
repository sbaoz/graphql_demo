/*
 * @Author: your name
 * @Date: 2022-01-19 14:50:31
 * @LastEditTime: 2022-01-26 13:47:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\UserForms\index.js
 */
import { useEffect, useState } from "react";

export default function UserForm(props) {
  const {
    clsName,
    updateUser,
    createUser,
    selData: { id = "", name = "", email = "", age = "", gender = "MAN" },
  } = props;
  const [curId, setCurId] = useState(id);
  const [curName, setCurName] = useState(name);
  const [curEmail, setCurEmail] = useState(email);
  const [curAge, setCurAge] = useState(age);
  const [curGender, setCurGender] = useState(gender);
  useEffect(() => {
    setCurId(id);
    setCurName(name);
    setCurEmail(email);
    setCurAge(age);
    setCurGender(gender);
  }, [id, name, age, email, gender]);

  const submitFn = (e) => {
    e.preventDefault();
    const variables = {
      id: curId || null,
      name: curName || null,
      email: curEmail || null,
      age: curAge ? parseInt(curAge) : null,
      gender: curGender || null,
    };
    Object.keys(variables).forEach((key) => {
      if (!variables[key]) {
        delete variables[key];
      }
    });
    if (id) {
      updateUser(variables);
    } else {
      createUser(variables);
    }
  };

  return (
    <div className={clsName}>
      <h4>useMutation</h4>
      <form onSubmit={submitFn}>
        id: <input value={curId} onChange={(e) => setCurId(e.target.value)} />
        name: <input value={curName} onChange={(e) => setCurName(e.target.value)} />
        email: <input value={curEmail} onChange={(e) => setCurEmail(e.target.value)} />
        age: <input value={curAge} onChange={(e) => setCurAge(e.target.value)} />
        gender:
        <select value={curGender} onChange={(e) => setCurGender(e.target.value)}>
          <option value={"MAN"}>MAN</option>
          <option value={"WOMAN"}>WOMAN</option>
        </select>
        <button type="submit">{id ? "Update" : "Create"} User</button>
      </form>
    </div>
  );
}

/*
 * @Author: your name
 * @Date: 2022-01-19 14:50:31
 * @LastEditTime: 2022-01-19 16:23:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \graphql_demo\client\src\components\CreateUser\index.js
 */
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";

export default function CreateUser(props) {
  const { clsName } = props;
  const idRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const [createUser, { data, error, loading, reset }] = useMutation(CREATE_USER, {
    variables: {
      name: "王老五",
      email: "laowu@xxx.com",
    }, // 可以配置默认值 会和createUser函数中的参数做浅合并 createUser函数中的参数优先级高
    onError: (error) => {
      console.log(error);
    },
  });
  const submitFn = (e) => {
    e.preventDefault();
    const variables = {
      id: idRef.current.value || null,
      name: nameRef.current.value || null,
      email: emailRef.current.value || null,
      age: ageRef.current.value ? parseInt(ageRef.current.value) : null,
      gender: genderRef.current.value || null,
    };
    Object.keys(variables).forEach((key) => {
      if (!variables[key]) {
        delete variables[key];
      }
    });
    createUser({
      variables,
    });
  };
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className={clsName}>
      <form onSubmit={submitFn}>
        id: <input ref={idRef} />
        name: <input ref={nameRef} />
        email: <input ref={emailRef} />
        age: <input ref={ageRef} />
        gender:
        <select ref={genderRef}>
          <option value={"MAN"}>MAN</option>
          <option value={"WOMAN"}>WOMAN</option>
        </select>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

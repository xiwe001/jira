import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  // const login = (param: { username: string, password: string }) => {
  //     const url = `${apiUrl}/login`
  //     // console.log(url);
  //     fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(param) }).then(async (response) => {
  //         if (response.ok) {

  //         }
  //     })
  // }
  const { login, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? (
        <div>
          {" "}
          登录成功，用户名：{user.name}，token：{user.token}
        </div>
      ) : null}
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id={"username"} title="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" title="password" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;

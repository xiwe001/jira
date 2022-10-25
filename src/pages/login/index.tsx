import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { Form, Button, Input } from "antd";

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

  const handleSubmitAntd = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmitAntd}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

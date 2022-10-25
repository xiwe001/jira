import React, { useState } from "react";
import { RegisterScreen } from "unauthenticated-app/register";
import { LoginScreen } from "unauthenticated-app/login";
import { Button, Card, Divider } from "antd";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";
import { useDocumentTitle } from "utils";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useDocumentTitle("请登录注册以继续");

  return (
    <>
      {isRegister ? (
        <RegisterScreen onError={setError} />
      ) : (
        <LoginScreen onError={setError} />
      )}
      <Divider />
      <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
      </Button>
    </>
  );
};

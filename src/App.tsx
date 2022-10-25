import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListPage } from "pages/project-list";
import Login from "pages/login";
import Register from "pages/register";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListPage /> */}
      {/* <Login /> */}
      {/* <Register /> */}

      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setEmail,
  setPassword,
} from "@store/slice/registerFormSlice"; // Import register form actions

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "@components/Input";
import { RootState } from "@store/store";
import { FormEventHandler, useState } from "react";

function App() {
  // Local State
  const [localRegisterForm, setLocalRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Global State
  const registerForm = useSelector(
    (state: RootState) => state.registerForm.value
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(setUsername(localRegisterForm.username));
    dispatch(setEmail(localRegisterForm.email));
    dispatch(setPassword(localRegisterForm.password));
  };

  console.log(registerForm);

  // Dispatcher
  const dispatch = useDispatch();

  return (
    <div
      className="container"
      style={{
        display: "flex",
      }}
    >
      <div className="screen">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div
          className="card"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <Input
              labelName="Username:"
              name="username"
              type="text"
              value={localRegisterForm.username}
              onChange={(e) => {
                setLocalRegisterForm({
                  ...localRegisterForm,
                  username: e.target.value,
                });
              }}
              required
            />
            <Input
              labelName="Email:"
              name="email"
              type="email"
              value={localRegisterForm.email}
              onChange={(e) => {
                setLocalRegisterForm({
                  ...localRegisterForm,
                  email: e.target.value,
                });
              }}
              required
            />
            <Input
              labelName="Password:"
              name="password"
              type="password"
              value={localRegisterForm.password}
              onChange={(e) => {
                setLocalRegisterForm({
                  ...localRegisterForm,
                  password: e.target.value,
                });
              }}
              required
            />
            <button style={{ width: "100%" }} type="submit">
              Register
            </button>
          </form>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div className="side">
        <h1>Register Form Data</h1>
        <p>Username: {registerForm.username}</p>
        <p>Email: {registerForm.email}</p>
        <p>Password: {registerForm.password}</p>
      </div>
    </div>
  );
}

export default App;

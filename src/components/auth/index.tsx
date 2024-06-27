import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./style.scss";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === "/login") {
      try {
        const userData = {
          email,
          password,
        };
        const response = await instance.post("auth/login", userData);
        await dispatch(login(response.data));
        navigate("/");
      } catch (error) {
        console.log(error);
        return error;
      }
    } else {
      if (password === repeatPassword) {
        const userData = {
          firstName,
          userName,
          email,
          password,
        };
        const response = await instance.post("auth/register", userData);
        console.log("response", response.data);
      } else {
        throw new Error(AppErrors.passwordDoNotMatch);
      }
    }
  };
  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          {location.pathname === "/login" ? (
            <LoginPage
              setEmail={setEmail}
              setPassword={setPassword}
              navigate={navigate}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUserName={setUserName}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;

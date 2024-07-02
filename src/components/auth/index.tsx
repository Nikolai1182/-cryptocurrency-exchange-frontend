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
import { useForm } from "react-hook-form";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log("errors", errors);

  const handleSubmitForm = async (data: any) => {
    console.log("data", data);

    if (location.pathname === "/login") {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const response = await instance.post("auth/login", userData);
        dispatch(login(response.data));
        navigate("/");
      } catch (error) {
        console.log(error);
        return error;
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            firstName,
            userName,
            email,
            password,
          };
          const response = await instance.post("auth/register", userData);
          dispatch(login(response.data));
          navigate("/");
        } catch (error) {
          return error;
        }
      } else {
        throw new Error(AppErrors.passwordDoNotMatch);
      }
    }
  };
  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
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
              navigate={navigate}
              register={register}
              errors={errors}
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

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { AppErrors } from "../../common/errors";
import { useForm } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "../../utils/yup";
import { useStyles } from "./styles";
import { registerUser, loginUser } from "../../store/thunks/auth";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === "/login" ? LoginSchema : RegisterSchema
    ),
  });
  const loading = useAppSelector((store) => store.auth.isLoading);

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        await dispatch(loginUser(data));
        navigate("/");
      } catch (error) {
        console.log(error);
        return error;
      }
    } else {
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            firstName: data.name,
            userName: data.userName,
            email: data.email,
            password: data.password,
          };

          await dispatch(registerUser(userData));
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
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"-3px -2px 20px 1px #202020"}
        >
          {location.pathname === "/login" ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              register={register}
              errors={errors}
              navigate={navigate}
              loading={loading}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;

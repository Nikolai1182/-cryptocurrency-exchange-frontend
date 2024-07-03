import React from "react";
// import style from "./style.module.css";
import { Button, TextField, Typography } from "@mui/material";
import { IPropsLogin } from "../../../common/types/auth";
import AppButton from "../../app-button";
import { useStyles } from "./styles";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors } = props;
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" fontSize={32} textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" textAlign="center" marginBottom={3}>
        Введите ваш логин и пароль
      </Typography>
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        label="@mail"
        variant="outlined"
        placeholder="Введите Ваш email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        error={!!errors.password}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите Ваш пароль"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <AppButton
        type="submit"
        sx={{
          fontFamily: "Poppins",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
        }}
        fullWidth={true}
        variant="contained"
      >
        Войти
      </AppButton>
      <Typography variant="body1" marginBottom={3}>
        У вас нет аккаунта?
        <span
          className={classes.insitingText}
          onClick={() => navigate("/register")}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;

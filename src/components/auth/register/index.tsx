import React from "react";
import { TextField, Typography } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";
import { useStyles } from "./styles";
import AppButton from "../../app-button";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" textAlign="center" marginBottom={3}>
        Введите данные для регистрации
      </Typography>
      <TextField
        error={!!errors.name}
        fullWidth={true}
        margin="normal"
        label="имя"
        variant="outlined"
        placeholder="Введите Ваше имя"
        helperText={errors.name ? `${errors.name.message}` : ""}
        {...register("name")}
      />
      <TextField
        error={!!errors.userName}
        fullWidth={true}
        margin="normal"
        label="userName"
        variant="outlined"
        placeholder="Введите Ваш userName"
        helperText={errors.userName ? `${errors.userName.message}` : ""}
        {...register("userName")}
      />
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
      <TextField
        error={!!errors.confirmPassword}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
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
        Регистрация
      </AppButton>
      <Typography variant="body1" marginBottom={3}>
        У вас есть аккаунт?
        <span
          className={classes.incitingText}
          onClick={() => navigate("/login")}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;

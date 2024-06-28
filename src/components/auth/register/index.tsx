import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const {
    setEmail,
    setFirstName,
    setPassword,
    setRepeatPassword,
    setUserName,
    navigate,
  } = props;

  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Poppins" }}
        textAlign="center"
      >
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
        textAlign="center"
        marginBottom={3}
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="имя"
        variant="outlined"
        placeholder="Введите Ваше имя"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="userName"
        variant="outlined"
        placeholder="Введите Ваш userName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="@mail"
        variant="outlined"
        placeholder="Введите Ваш email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите Ваш пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button
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
      </Button>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
        marginBottom={3}
      >
        У вас есть аккаунт?
        <span className="registerText" onClick={() => navigate("/login")}>
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;

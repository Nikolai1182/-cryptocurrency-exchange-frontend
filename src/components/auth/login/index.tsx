import React from "react";
// import style from "./style.module.css";
import { Button, TextField, Typography } from "@mui/material";
import { IPropsLogin } from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setEmail, setPassword, navigate } = props;
  return (
    <>
      <Typography variant="h3" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Poppins"
        textAlign="center"
        marginBottom={3}
      >
        Введите ваш логин и пароль
      </Typography>
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
        Войти
      </Button>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
        marginBottom={3}
      >
        У вас нет аккаунта?
        <span className="registerText" onClick={() => navigate("/register")}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;

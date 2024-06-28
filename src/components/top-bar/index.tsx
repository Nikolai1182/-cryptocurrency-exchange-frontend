import { Box, Grid, IconButton, InputBase } from "@mui/material";
// import React, { useContext } from "react";
import { useAppSelector } from "../../utils/hook";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import { DarkMode, LightMode, NotificationsNone } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";

export default function TopBarComponent(): JSX.Element {
  const { user } = useAppSelector((store) => store.auth.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" px="32px" py="24px">
      <Grid> Welcome {user ? `${user.firstName}` : ""}!</Grid>
      <Box display="flex">
        <Grid
          onClick={colorMode.toggleColorMode}
          sx={{
            pr: "37px",
            borderRight: `1px solid ${colors.gray.DEFAULT}`,
          }}
        >
          <IconButton sx={{ mr: "45px" }}>
            {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton>
            <NotificationsNone />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: "8px",
            ml: "28px",
          }}
        >
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ px: "18px", py: "12px" }} placeholder="Поиск" />
        </Grid>
      </Box>
    </Box>
  );
}

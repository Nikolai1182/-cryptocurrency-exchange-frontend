import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
// import React, { useContext } from "react";
import { useAppSelector } from "../../utils/hook";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../../theme";
import { FC, useContext } from "react";
import {
  DarkMode,
  LightMode,
  MenuOutlined,
  NotificationsNone,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";
import FlexBetween from "../flex-between";
import { ITopBarProps } from "../../common/types/top-bar";

const TopBarComponent: FC<ITopBarProps> = (
  props: ITopBarProps
): JSX.Element => {
  const user = sessionStorage.getItem("name");

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();
  const { isOpen, setIsOpen } = props;

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <Grid>
          <FlexBetween>
            <MenuOutlined
              className={classes.menuIcon}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Typography variant="h3">
              Welcome, {user ? `${user}` : ""}!
            </Typography>
          </FlexBetween>
        </Grid>
        <Box display="flex">
          <Grid
            onClick={colorMode.toggleColorMode}
            className={classes.iconBlock}
          >
            <IconButton className={classes.themeIcon}>
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск" />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;

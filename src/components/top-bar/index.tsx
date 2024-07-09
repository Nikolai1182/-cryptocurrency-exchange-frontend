import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
// import React, { useContext } from "react";

import { FC } from "react";
import { MenuOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";
import FlexBetween from "../flex-between";
import { ITopBarProps } from "../../common/types/top-bar";
import ThemeSwitcherComponent from "../theme-switcher";
import SearchBarComponent from "../search-bar";

const TopBarComponent: FC<ITopBarProps> = (
  props: ITopBarProps
): JSX.Element => {
  const user = sessionStorage.getItem("name");

  const classes = useStyles();
  const { isOpen, setIsOpen, isNoneMobile } = props;

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={3} lg={3}>
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
          {isNoneMobile && (
            <Grid display="flex" justifyContent="flex-end" item sm={9} lg={9}>
              <ThemeSwitcherComponent />
              <SearchBarComponent />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;

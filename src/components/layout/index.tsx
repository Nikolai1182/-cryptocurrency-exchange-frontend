import React, { FC, useState } from "react";
import TopBarComponent from "../top-bar";
import { Outlet, useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SideBarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNoneMobile = useMediaQuery("(min-width:760px)");
  const classes = useStyles();
  return (
    <>
      {location.pathname === "/login" || location.pathname === "/register" ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Box
            display={isNoneMobile ? "flex" : "block"}
            justifyContent="space-between"
            width="100%"
            height="100%"
          >
            <SideBarComponent
              isNoneMobile={isNoneMobile}
              drawerWidth="250px"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <Box className={classes.mainSection}>
              <TopBarComponent
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isNoneMobile={isNoneMobile}
              />
              <Outlet />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default LayoutComponent;

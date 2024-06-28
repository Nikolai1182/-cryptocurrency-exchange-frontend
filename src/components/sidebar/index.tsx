import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  HomeOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../flex-between";

const SideBarComponent = (props: any) => {
  const [active, setActive] = useState("");
  const classes = useStyles;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { isNoneMobile, drawerWidth, isOpen, setIsOpen } = props;
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box>
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="10px">
                  <Typography>КриптоКапитон</Typography>
                </Box>
                {!isNoneMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
                <Box></Box>
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBarComponent;

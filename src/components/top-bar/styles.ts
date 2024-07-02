import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "32px 24px",
      backgroundColor: colors.primary.DEFAULT,
      maxHeight: "95px",
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    iconBlock: {
      paddingRight: "37px",
      paddingTop: "10px",
      borderRight: `1px solid ${colors.borderColor}`,
    },
    themeIcon: {
      marginRight: "45px",
    },
    searchBlock: {
      display: "flex",
      backgroundColor: `${colors.primary[600]}`,
      borderRadius: "8px",
      marginLeft: "28px",
    },
    searchIcon: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    searchInput: {
      width: "389px",
      padding: "18px 12px",
    },
  };
});

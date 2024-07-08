import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      flexGrow: 1,
      padding: 32,
    },
    areaChart: {
      marginBottom: 32,
    },
    lineChartBlock: {
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      marginBottom: 32,
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    topCardItem: {
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      height: 185,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    assetName: {
      fontSize: 25,
      fontWeight: 600,
      lineHeight: "2px",
      textTransform: "capitalize",
    },
    itemDetails: {
      display: "flex",
      height: "90%",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: "80px",
    },
    cardPrice: {
      paddingBottom: "20px",
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "0px",
    },
    cardCapitalize: {
      color: `${colors.secondary.DEFAULT}`,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "21px",
    },
    areaGrid: {
      display: "flex",
      alignItems: "center",
    },
    priceTrend: {
      width: "80px",
      display: "flex",
      alignItems: "center",
      padding: "2px",
      borderRadius: 4,
    },
    trendUp: {
      backgroundColor: "#A9FFA7",
      color: "#037400",
    },
    trendDown: {
      backgroundColor: "#FFA7A7",
      color: "#740000",
    },
  };
});

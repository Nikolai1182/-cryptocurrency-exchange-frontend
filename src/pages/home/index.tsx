import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets, getPricesAssets } from "../../store/thunks/assets";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import AreaChart from "../../components/charts/area-chart";
import TrendUp from "../../assets/images/chart/trend-up.svg";
import TrendDown from "../../assets/images/chart/trend-down.svg";
import LineChart from "../../components/charts/line-chart";

export default function Home() {
  const dispatch = useAppDispatch();
  const favoriteAssets: [] = useAppSelector(
    (store) => store.assets.favoriteAssets
  );
  const pricesAssets = useAppSelector((store) => store.assets.pricesAssets);

  const favoriteAssetsId = useMemo(() => ["bitcoin", "notcoin"], []);
  const fetchDataRef = useRef(false);
  const classes = useStyles();
  const filteredArray = favoriteAssets.filter(
    (value: any, index, self: any) =>
      index === self.findIndex((t: any) => t.name === value.name)
  );

  const fetchDataPrices = (data: string[]) => {
    data.forEach((element: string) => {
      dispatch(getPricesAssets(element));
    });
  };

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getFavoriteAssets(element));
      });
    },
    [dispatch]
  );

  // useEffect(() => {
  //   fetchDataPrices(favoriteAssetsId);
  // }, []);
  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetsId);
    fetchDataPrices(favoriteAssetsId);
  }, [favoriteAssetsId, fetchData]);

  const renderFavoriteBlock = filteredArray.map((element: any, i) => {
    // console.log(element.data.market_data);

    const currentPrice = element.data.market_data.current_price.usd;
    const currentCup = element.data.market_data.market_cap.usd;
    const changePrice =
      element.data.market_data.market_cap_change_percentage_24h;
    return (
      <Grid item xs={12} sm={6} lg={6} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6} sx={{ height: "185px" }}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <span className={classes.cardPrice}>
                ${currentPrice.toFixed(2)}
              </span>
              <Box
                className={
                  changePrice > 0
                    ? `${classes.priceTrend} ${classes.trendUp}`
                    : `${classes.priceTrend} ${classes.trendDown}`
                }
              >
                {changePrice > 0 ? (
                  <img src={TrendUp} alt="TrendUp" />
                ) : (
                  <img src={TrendDown} alt="TrendDown" />
                )}
                <Typography variant="body1">
                  {Number(changePrice).toFixed(2)}%
                </Typography>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className={classes.areaGrid}>
            {pricesAssets.length && pricesAssets[i]?.prices && (
              <AreaChart data={pricesAssets[i]?.prices} />
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.areaChart}>
        {renderFavoriteBlock}
      </Grid>
      <Grid container className={classes.lineChartBlock}>
        <Grid item xs={12} sm={12} lg={12}>
          {pricesAssets.length && <LineChart data={pricesAssets} />}
        </Grid>
      </Grid>
    </Box>
  );
}

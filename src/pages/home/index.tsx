import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets, getPricesAssets } from "../../store/thunks/assets";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";
import AreaChart from "../../components/charts/area-chart";

export default function Home() {
  const dispatch = useAppDispatch();
  const favoriteAssets: [] = useAppSelector(
    (store) => store.assets.favoriteAssets
  );
  const pricesAssets = useAppSelector((store) => store.assets.pricesAssets);

  // console.log("PricesAssets", priceData);
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

  useEffect(() => {
    fetchDataPrices(favoriteAssetsId);
  }, []);
  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetsId);
  }, [favoriteAssetsId, fetchData]);

  const renderFavoriteBlock = filteredArray.map((element: any) => {
    const currentPrice = element.data.market_data.current_price.usd;
    const currentCup = element.data.market_data.market_cap.usd;
    return (
      <Grid item xs={12} sm={6} lg={6} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6} sx={{ height: "185px" }}>
            <h3>{element.name}</h3>
            <div className={classes.itemDetails}>
              <Box>
                <h3 className={classes.cardPrice}>
                  ${currentPrice.toFixed(2)}
                </h3>
                <p className={classes.cardCapitalize}>
                  ${currentCup.toFixed(0)}
                </p>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={pricesAssets[0].prices} />
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {renderFavoriteBlock}
      </Grid>
    </Box>
  );
}

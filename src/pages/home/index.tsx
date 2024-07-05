import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssetsOne } from "../../store/thunks/assets";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";

export default function Home() {
  const dispatch = useAppDispatch();
  const favoriteAssets: [] = useAppSelector(
    (store) => store.assets.favoriteAssets
  );

  const favoriteAssetsId = useMemo(() => ["1", "2"], []);
  const fetchDataRef = useRef(false);
  const classes = useStyles();
  const filteredArray = favoriteAssets.filter(
    (value: any, index, self: any) =>
      index === self.findIndex((t: any) => t.data.name === value.data.name)
  );

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getFavoriteAssetsOne(element));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetsId);
  }, []);

  const renderFavoriteBlock = filteredArray.map((element: any) => {
    console.log("element", element);
    const currentPrice = element.data.values.USD.price;
    const currentCup = element.data.values.USD.marketCap;
    return (
      <Grid item xs={12} sm={6} lg={6}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6} sx={{ height: "185px" }}>
            <h3>{element.data.name}</h3>
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
            <h5>Chart</h5>
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

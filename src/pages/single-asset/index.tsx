import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import {
  AlertColor,
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import FlexBetween from "../../components/flex-between";
import { useStyles } from "./styles";
import { createWatchListRecord } from "../../store/thunks/assets";

export default function SingleAssetPage() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>("success");
  const allCoins = useAppSelector((store) => store.assets.topPricesCoins);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const classes = useStyles();

  const oneCoin = allCoins[0].find((el: any) => el.name === (id as string));

  const handleCreateRecord = () => {
    try {
      const data = {
        name: "",
        assetId: "",
      };
      if (oneCoin) {
        data.name = oneCoin.name;
        data.assetId = oneCoin.id;
      }
      dispatch(createWatchListRecord(data));
      setError(false);
      setSeverity("success");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (e) {
      setError(true);
      setSeverity("error");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  return (
    <>
      {oneCoin && (
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.assetName}>
            <Typography variant="h2">{oneCoin.name}</Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
              <FlexBetween>
                <Avatar src={oneCoin.image} className={classes.assetIcon} />
                <Typography variant="h4" className={classes.assetSymbol}>
                  {oneCoin.symbol.toUpperCase()}
                </Typography>
              </FlexBetween>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
              <FlexBetween>
                <Typography variant="h4" className={classes.cardTitle}>
                  Цена: &nbsp;
                </Typography>

                <Typography variant="h4" className={classes.assetPrice}>
                  $ {oneCoin.current_price}
                </Typography>
              </FlexBetween>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid container className={classes.cardItem}>
              <Typography variant="h4" className={classes.cardTitle}>
                Изменение цены:
              </Typography>
              <Typography
                variant="h4"
                className={
                  oneCoin.market_cap_change_percentage_24h >= 0
                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                }
              >
                {oneCoin.price_change_24h.toFixed(2)}$
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
              <Typography variant="h4" className={classes.cardTitle}>
                Изменение цены %:
              </Typography>
              <Typography
                variant="h4"
                className={
                  oneCoin.market_cap_change_percentage_24h >= 0
                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                }
              >
                {oneCoin.market_cap_change_percentage_24h.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            className={classes.cardButtonBlock}
          >
            <Button
              color="success"
              variant="outlined"
              className={classes.cardButton}
              onClick={() => navigate(-1)}
            >
              Назад
            </Button>
            <Button
              color="success"
              variant="outlined"
              className={classes.cardButton}
              onClick={handleCreateRecord}
            >
              Добавить в избраное
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}

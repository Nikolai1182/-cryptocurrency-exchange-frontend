import { useEffect } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getWatchlistElements } from "../../store/thunks/watchlist";
import { getTopPriceCoins } from "../../store/thunks/assets";

export const WatchListComponent = () => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((store) => store.watchlist.assets);

  const allCoins = useAppSelector((store) => store.assets.topPricesCoins);
  const classes = useStyles();

  const filteredArray = allCoins[0].filter((element: any) => {
    return watchlist.some((otherElement: any) => {
      return otherElement.assetId === element.id;
    });
  });

  useEffect(() => {
    dispatch(getTopPriceCoins());
    dispatch(getWatchlistElements());
  }, [dispatch]);
  return (
    <>
      <Grid className={classes.root}>
        <Grid className={classes.watchlistHeading}>
          <Typography variant="h2" className={classes.heading}>
            Избранное
          </Typography>
        </Grid>
        <Grid className={classes.assetsTableBlock}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>№</TableCell>
                  <TableCell>Название</TableCell>
                  <TableCell align="right">Цена</TableCell>
                  <TableCell align="right">Изменение ($)</TableCell>
                  <TableCell align="right">Изменение (%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredArray.map((element: any, i: number) => (
                  <TableRow
                    key={element.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {element.name}
                    </TableCell>
                    <TableCell align="right">{element.current_price}</TableCell>
                    <TableCell
                      align="right"
                      className={
                        element.price_change_24h > 0
                          ? `${classes.priceUp}`
                          : `${classes.priceDown}`
                      }
                    >
                      {element.price_change_24h.toFixed(2)}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={
                        element.price_change_percentage_24h > 0
                          ? `${classes.priceUp}`
                          : `${classes.priceDown}`
                      }
                    >
                      {element.price_change_percentage_24h.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

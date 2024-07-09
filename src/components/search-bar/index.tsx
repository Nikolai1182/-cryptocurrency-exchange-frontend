import React, { FC, useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppSelector } from "../../utils/hook";

const SearchBarComponent: FC = (): JSX.Element => {
  const topPrice = useAppSelector((store) => store.assets.topPricesCoins);
  console.log(topPrice);

  return (
    <Stack spacing={2} sx={{ width: "300px" }}>
      <Autocomplete
        freeSolo
        renderInput={(element) => (
          <TextField
            {...element}
            label="Поиск"
            InputProps={{
              ...element.InputProps,
              type: "search",
            }}
          />
        )}
        options={topPrice[0].map((element: { name: string }) => element.name)}
      />
    </Stack>
  );
};

export default SearchBarComponent;

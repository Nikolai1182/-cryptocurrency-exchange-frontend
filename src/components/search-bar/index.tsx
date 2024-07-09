import React, { FC, useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppSelector } from "../../utils/hook";
import { useNavigate } from "react-router-dom";

const SearchBarComponent: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string | null>("");
  const topPrice = useAppSelector((store) => store.assets.topPricesCoins);
  console.log(selectedItem);

  return (
    <Stack spacing={2} sx={{ width: "300px" }}>
      <Autocomplete
        value={selectedItem}
        onChange={(e: any, value: string | null) => {
          navigate(`single/${value}`);
          setSelectedItem("");
        }}
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

import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";

const SearchBar = ({ setUserInput }) => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Box
      sx={{
        transition: "all 0.3s ease",
        width: inputFocus ? "25rem" : "15rem",
      }}
    >
      <TextField
        onMouseOver={() => setInputFocus(true)}
        onMouseOut={() => setInputFocus(false)}
        onChange={(e) => setUserInput(e.target.value)}
        color="white"
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="white" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;

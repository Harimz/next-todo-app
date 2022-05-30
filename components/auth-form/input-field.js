import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

const InputField = ({ type, setUserInputs }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <FormControl variant="outlined">
      {type === "password" ? (
        <>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            label="Password"
            type={visibility ? "text" : "password"}
            onChange={({ target }) =>
              setUserInputs((state) => ({ ...state, password: target.value }))
            }
            placeholder="Enter your password..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setVisibility((state) => !state)}
                >
                  {visibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </>
      ) : (
        <TextField
          variant="outlined"
          label="Email"
          placeholder="Enter your email..."
          size="medium"
          onChange={({ target }) =>
            setUserInputs((state) => ({ ...state, email: target.value }))
          }
        />
      )}
    </FormControl>
  );
};

export default InputField;

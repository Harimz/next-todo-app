/* eslint-disable react/display-name */
import React, { useState, forwardRef } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";

const InputField = ({ type, value, control, errors }, ...props) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <FormControl variant="outlined">
      {type === "password" ? (
        <Stack>
          <Controller
            control={control}
            name={type}
            render={({ field: { onChange, onBlur } }) => (
              <>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={onChange}
                  onBlur={onBlur}
                  label="Password"
                  error={errors?.password && true}
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
            )}
          />
          {errors?.password && (
            <Typography color="red" marginLeft="0.5rem">
              Please provide a valid password
            </Typography>
          )}
        </Stack>
      ) : (
        <Stack>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur } }) => (
              <TextField
                error={errors?.email && true}
                label="Email"
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors?.email && (
            <Typography color="red" marginLeft="0.5rem">
              Please provide a valid email
            </Typography>
          )}
        </Stack>
      )}
    </FormControl>
  );
};

export default InputField;

import { Facebook, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const AuthButton = ({ strategy, children, ...props }) => {
  return (
    <Button
      variant="outlined"
      startIcon={strategy === "google" ? <Google /> : <Facebook />}
      color="primary"
      sx={{ padding: "0.75rem" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AuthButton;

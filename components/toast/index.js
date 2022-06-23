import React, { useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { Close } from "@mui/icons-material";

const Toast = ({ message, severity, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <Close fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert severity={severity} action={action}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;

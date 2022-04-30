import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const LinkButton = ({ route, text }) => {
  return (
    <Link passHref href={route}>
      <Button variant="outlined" color="white">
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;

import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { Menu, Home } from "@mui/icons-material";
import Link from "next/link";
import LinkButton from "./link-button";
import SearchBar from "./search-bar";

const Navigation = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <Stack bgcolor="primary.main" component="nav">
      <Stack
        width="95%"
        direction="row"
        justifyContent="space-between"
        m="auto"
        p={1}
      >
        <Stack direction="row" spacing={2}>
          <IconButton>
            <Menu color="white" />
          </IconButton>

          <Link passHref href="/">
            <IconButton>
              <Home color="white" />
            </IconButton>
          </Link>

          <SearchBar setUserInput={setUserInput} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <LinkButton route="/auth/login" text="Login" />

          <LinkButton route="/auth/signup" text="Sign Up" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navigation;

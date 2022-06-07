import React, { useState } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AuthButton from "./auth-button";
import InputField from "./input-field";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const AuthForm = ({ type }) => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const credentialsHandler = async (e) => {
    e.preventDefault();

    try {
      if (type === "register") {
        const { data } = await axios.post("/api/auth/register", userInputs, {
          "Content-Type": "application/json",
        });

        const result = await signIn("credentials", {
          redirect: false,
          email: userInputs.email,
          password: userInputs.password,
        });

        if (!result.error) {
          router.replace("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack maxWidth="60rem" width="100%" margin="5rem auto" direction="row">
      <Stack
        component="form"
        sx={{ width: { xs: "100%", lg: "50%" } }}
        gap="1rem"
        padding="3rem"
        onSubmit={credentialsHandler}
      >
        <Typography variant="h4" fontWeight="bold">
          {type === "register" ? "Sign Up" : "Login"}
        </Typography>

        <AuthButton strategy="google">Contine with Google</AuthButton>

        <AuthButton strategy="facebook">Continue with facebook</AuthButton>

        <Divider />

        <InputField setUserInputs={setUserInputs} />

        <InputField type="password" setUserInputs={setUserInputs} />

        <Button
          variant="contained"
          sx={{
            padding: "0.75rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
          }}
          type="submit"
        >
          {type === "register" ? "Sign up with email" : "Login with email"}
        </Button>

        <Divider />

        {type === "register" ? (
          <Typography component="p" textAlign="center">
            Already have an account?{" "}
            <Link passHref href="/auth/login">
              {/* <Typography
                display="inline-block"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              > */}
              Login
              {/* </Typography> */}
            </Link>
          </Typography>
        ) : (
          <Typography component="p" textAlign="center">
            Dont have an account?{" "}
            <Link passHref href="/auth/signup">
              {/* <Typography
                display="inline-block"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Sign up */}
              {/* </Typography> */}
            </Link>
          </Typography>
        )}
      </Stack>
      <Stack width="50%" sx={{ display: { xs: "none", lg: "block" } }}>
        <Box position="relative" sx={{ height: "25rem", width: "23rem" }}>
          <Image
            src="/images/auth-image.png"
            layout="fill"
            alt="Sign up image"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AuthForm;

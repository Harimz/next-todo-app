import React, { useState } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AuthButton from "./auth-button";
import InputField from "./input-field";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import formErrors from "../../utils/form-errors";
import { useAuth } from "../../hooks/useAuth";
import Toast from "../toast";

const AuthForm = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(formErrors);
  const { registerUser, loginUser } = useAuth();

  const credentialsHandler = async (credentials) => {
    const { email, password } = credentials;

    if (type === "register") {
      const result = await registerUser(email, password);

      if (result.status === "error") {
        setOpen(true);
        setMessage(result.message);
      }

      router.replace("/");
    } else {
      const result = await loginUser(email, password);

      if (result.status === "error") {
        setOpen(true);
        setMessage(result.message);
      }

      router.replace("/");
    }
  };

  return (
    <Stack maxWidth="60rem" width="100%" margin="5rem auto" direction="row">
      <Toast severity="error" message={message} open={open} setOpen={setOpen} />

      <Stack
        component="form"
        sx={{ width: { xs: "100%", lg: "50%" } }}
        gap="1rem"
        padding="3rem"
        onSubmit={handleSubmit(credentialsHandler)}
      >
        <Typography variant="h4" fontWeight="bold">
          {type === "register" ? "Sign Up" : "Login"}
        </Typography>

        <AuthButton
          strategy="google"
          onClick={() => signIn("google", { redirect: "/" })}
        >
          Continue with Google
        </AuthButton>

        <AuthButton
          strategy="facebook"
          onClick={() => signIn("facebook", { redirect: "/" })}
        >
          Continue with facebook
        </AuthButton>

        <Divider />

        <InputField control={control} errors={errors} />

        <InputField type="password" control={control} errors={errors} />

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
              > */}
              Sign up
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

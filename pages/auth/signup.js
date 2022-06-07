import React from "react";
import AuthForm from "../../components/auth-form";

const SignupPage = () => {
  return (
    <>
      <AuthForm type="register" />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default SignupPage;

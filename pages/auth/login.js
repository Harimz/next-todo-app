import { getSession } from "next-auth/react";
import React from "react";
import AuthForm from "../../components/auth-form";

const LoginPage = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (session) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default LoginPage;

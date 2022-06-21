import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();

  const registerUser = async (email, password) => {
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { email, password },
        {
          "Content-Type": "application/json",
        }
      );

      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (!result.error) {
        router.replace("/");
        return result;
      }
    } catch (error) {
      return error;
    }
  };

  return { registerUser, error };
};

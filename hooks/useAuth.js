import axios from "axios";
import { signIn } from "next-auth/react";

export const useAuth = () => {
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
        return { status: "success", data: data };
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      return { status: "error", message: errorMessage };
    }
  };

  const loginUser = async (email, password) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      console.log(result);

      if (result.error) {
        return { status: "error", message: result.error };
      }

      if (!result.error) {
        return { status: "success", data: result };
      }
    } catch (error) {
      return error;
    }
  };

  return { registerUser, loginUser };
};

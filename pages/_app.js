import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/layout";
import { theme } from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CssBaseline />

        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;

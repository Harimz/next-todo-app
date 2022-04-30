import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/layout";
import { theme } from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

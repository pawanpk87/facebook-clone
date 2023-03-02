import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import Store from "@/public/src/app/Store";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

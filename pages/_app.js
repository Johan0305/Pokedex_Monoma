import "../styles/global.scss";
import Layout from "../components/Layout";
import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import localStorage from "local-storage";
import { useRouter } from "next/router";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [render, setRender] = useState("");
  const router = useRouter();

  useEffect(() => {
    const roll = localStorage.get("rol");
    if (roll === null) {
      return router.push("/");
    }
    if (location.pathname === "/") {
      if (roll !== null) {
        setUser(roll);
        return router.push("/dashboard");
      }
    }

    if (roll !== null) {
      setUser(roll);

      if (pageProps.protected && !roll) {
        return setRender(
          <div className="backgroundspinner">
            <div className="spinner"></div>
          </div>
        );
      }
    }

    if (
      pageProps.protected &&
      roll &&
      pageProps.userTypes &&
      pageProps.userTypes.indexOf(roll) === -1
    ) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
      setTimeout(() => {
        setRender("");
      }, 4000);
      return setRender(
        <div className="pageDontAccess">
          <h1 className="dontAccess">
            Lo sentimos, no tienes accesos a esta sección, serás redirigido a la
            pantalla principal
          </h1>
          <div className="spinner"></div>
        </div>
      );
    }
  }, []);

  return render === "" ? (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </Provider>
  ) : (
    render
  );
}

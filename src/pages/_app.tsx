import { Web3ReactProvider } from "@web3-react/core";
import "../styles/globals.css";
import { getProvider } from "../utils/web3";
import { Web3Provider } from "@ethersproject/providers";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getProvider}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ReactProvider>
  );
}

export default MyApp

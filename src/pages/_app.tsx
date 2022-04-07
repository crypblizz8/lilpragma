import { Web3ReactProvider } from "@web3-react/core";
import "../styles/globals.css";
import { getProvider } from "../utils/web3";
import { Web3Provider } from "@ethersproject/providers";


function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getProvider}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;

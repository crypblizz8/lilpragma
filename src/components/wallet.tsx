import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useInitialConnect } from "../hooks/useInitialConnect";
import {
  injected,
  formatAddress,
  formatEtherscanLink,
  getNetworkName,
  getNetworkColor,
  walletConnectConnector,
} from "../utils/web3";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import DropDownMenu from "./dropDownMenu";

export default function Wallet() {
  useInitialConnect();
  const { account, activate, active, chainId, deactivate, setError } =
    useWeb3React();

  useEffect(() => {}, [active]);

  async function connect() {
    try {
      console.log("connecting..");
      activate(
        injected,
        (error) => {
          if (error instanceof UserRejectedRequestError) {
            // ignore user rejected error
          } else {
            console.log("error..");
            setError(error);
          }
        },
        false
      );
    } catch (ex) {
      console.log(ex);
    }
  }

  function walletConnect() {
    activate(
      walletConnectConnector,
      (error) => {
        if (error instanceof UserRejectedRequestError) {
          // ignore user rejected error
        } else {
          setError(error);
        }
      },
      false
    );
  }

  async function disconnect() {
    try {
      console.log("Signed Out");
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="flex flex-row items-center flex-wrap p-6">
      <div className="flex-row flex-grow flex lg:items-end w-auto xs:justify-end">
        <div className="m-2 mx-4 ">{getNetworkName(chainId)}</div>
        <DropDownMenu disconnect={disconnect} connect={connect} walletConnect={walletConnect} />
      </div>
    </div>
  );
}

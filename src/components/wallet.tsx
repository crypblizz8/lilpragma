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

  useEffect(() => {
    console.log("useEffect active", active);
  }, [active]);

  async function connect() {
    try {
      console.log("connecting..");
      activate(
        injected,
        (error) => {
          if (error instanceof UserRejectedRequestError) {
            // ignore user rejected error
          } else {
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
    <div className="flex items-center flex-wrap p-6">
      <div className="w-full block  flex-grow lg:flex lg:items-end lg:w-auto xs:justify-end">
        <div className="m-2 mx-4">{getNetworkName(chainId)}</div>
        <DropDownMenu disconnect={disconnect} connect={connect} />
      </div>
    </div>
  );
}

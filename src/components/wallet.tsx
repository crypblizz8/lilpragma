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

export function Wallet() {
  useInitialConnect();
  const { account, activate, active, deactivate, setError } = useWeb3React();

  useEffect(() => {}, [active]);

  async function connect() {
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
  }

  function walletConnect() {
    web3Connect.activate(
      walletConnectConnector,
      (error) => {
        if (error instanceof UserRejectedRequestError) {
          // ignore user rejected error
        } else {
          web3Connect.setError(error);
        }
      },
      false
    );
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  {
    /* {web3Connect.error && <p>{web3Connect.error.name}: {web3Connect.error.message}</p>} */
  }

  const notConnectedWallet = (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={connect}
      >
        Connect
      </button>
    </div>
  );

  return (
    <div>
      <nav className="flex items-center justify-end flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6"></div>
        <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto xs:justify-end">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <DropDownMenu disconnect={disconnect} connect={connect} />
          </div>
        </div>
      </nav>
    </div>
  );
}

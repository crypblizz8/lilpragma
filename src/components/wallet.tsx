import React from "react";
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

export function Wallet() {
  useInitialConnect();
  const web3Connect = useWeb3React();
  console.log("web3Connect", web3Connect);

  function connect() {
    console.log("connectFunciton");
    web3Connect.activate(
      injected,
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

  function disconnect() {
    web3Connect.deactivate();
  }

  {
    /* {web3Connect.error && <p>{web3Connect.error.name}: {web3Connect.error.message}</p>} */
  }

  const notConnectedWallet = (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => connect}
      >
        Connect
      </button>
    </div>
  );

  const activeWallet = (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log("connected")}
      >
        Connected
      </button>
    </div>
  );

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <div>{!web3Connect.active ? notConnectedWallet : activeWallet}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

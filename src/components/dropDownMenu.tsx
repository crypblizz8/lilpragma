/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core/";
import {
  injected,
  formatAddress,
  formatEtherscanLink,
  getNetworkName,
  getNetworkColor,
  walletConnectConnector,
} from "../utils/web3";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const svgIcon = (
  <svg
    className="ml-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

export default function DropDownMenu({ disconnect, connect, walletConnect }) {
  const { account, active, chainId } = useWeb3React();
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // console.log("isMobile", isMobile);

  return (
    <>
      {!active && (
        <Menu
          as="div"
          className="relative max-w-[50%] flex text-left"
          // onClick={!isMobile ? connect : walletConnect}
          // onClick={() => console.log("unclicked")}
          // onClick={walletConnect}
        >
          {/* <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Connect
            {svgIcon}
          </button> */}
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Connect
            {svgIcon}
          </Menu.Button>
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item as="div" onClick={connect}>
                <Menu.Button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  Metamask
                </Menu.Button>
              </Menu.Item>
              <Menu.Item as="div" onClick={walletConnect}>
                <Menu.Button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  WalletConnect
                </Menu.Button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      )}

      {active && typeof account === "string" && typeof chainId === "number" && (
        <Menu as="div" className="relative max-w-[50%] flex text-left">
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            {formatAddress(account, 2)}
            {svgIcon}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={formatEtherscanLink("Account", account, chainId)}
                      target="_blank"
                      // href="http://google.com"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      rel="noreferrer"
                    >
                      View on Etherscan
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={disconnect}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
}

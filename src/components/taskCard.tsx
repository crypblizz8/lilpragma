// import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/questCard.styles";
import { Quest } from "../types/index";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { verifyScore } from "../utils/verifier";

// <NextLink href={`/${journey.id}`} passHref>

export default function TaskCard({ quest }) {
  const [result, setResult] = useState<boolean | number | undefined>();
  const web3 = useWeb3React();
  // const task = quest.task;

  useEffect(() => {
    async function verify() {
      const result = await verifyScore(quest, web3.account);
      setResult(result);
    }

    verify();
  }, [quest.task, quest.address, web3.account, quest]);

  return (
    <div
      style={{ maxWidth: 250 }}
      className="border border-neutral-400 max-w-200 rounded-xl flex flex-col"
    >
      <div className="px-4">
        <div className="flex justify-end my-2">
          <div
            className={
              result
                ? "bg-black p-1 rounded-xl"
                : "border border-black p-1 rounded-xl"
            }
          >
            <p className={result ? "text-white text-xs" : "text-xs"}>
              {result ? "Complete" : "Incomplete"}
            </p>
          </div>
        </div>
        <div className="flex justify-center item-center">
          <div
            style={{
              height: 100,
              width: 100,
              background: "red",
              borderRadius: 100 / 2,
            }}
          ></div>
        </div>

        <div className="my-2 h-32">
          <h1 className="text-xl font-medium m-0">{quest.name}</h1>
          <p className="text-xs py-2">{quest.points} points</p>
          <p className="text-xs">{quest.description}</p>
        </div>
      </div>

      <button
        onClick={() => window.open(quest.tutorial)}
        className="flex rounded-b-xl	justify-center bg-black flex-grow py-4"
      >
        <p className="text-white">View Tutorial</p>
      </button>
    </div>
  );
}

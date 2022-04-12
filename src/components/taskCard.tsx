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
      // console.log(web3.account);
      const result = await verifyScore(quest, web3.account);

      console.log(quest.name, result);
      setResult(result);
    }

    verify();
  }, [quest.task, quest.address, web3.account]);

  return (
    <div className="border border-sky-600 rounded rounded-xl flex flex-col">
      <div className="px-4">
        <div className="flex border-indigo-500 border justify-end my-2">
          <p> {result ? "Complete ✅" : "Incomplete⭕️"}</p>
        </div>
        <div className="border border-sky-600 flex justify-center item-center">
          <div
            style={{
              height: 100,
              width: 100,
              background: "red",
              borderRadius: 100 / 2,
            }}
          ></div>
        </div>

        <div className="py-2">
          <h1 className="text-xl font-medium">{quest.name}</h1>
          <p>{quest.points} points</p>
          <p style={{ minHeight: 50 }}>{quest.description}</p>
        </div>
      </div>

      <button
        onClick={() => window.open(quest.tutorial)}
        className="flex rounded-b-2xl	border-indigo-500 border justify-center bg-black flex-grow py-4"
      >
        <p className="text-white"> View Tutorial</p>
      </button>
    </div>
  );
}

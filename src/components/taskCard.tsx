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
      // console.log(quest.task);
      // console.log(web3.account);
      const result = await verifyScore(quest, web3.account);

      console.log(quest.name, result);
      setResult(result);
    }

    verify();
  }, [quest.task, quest.address, web3.account]);

  return (
    <div className="flex flex-col rounded-2xl h-1/2 w-1/4  bg-red-400 m-2">
      <h1>{quest.name}</h1>
      <p>{quest.description}</p>
      <p> {result ? "✅" : "⭕️"}</p>
      <p>{quest.points}</p>
    </div>
  );
}

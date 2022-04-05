// import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/questCard.styles";
import { Quest } from "../types/index";

// <NextLink href={`/${journey.id}`} passHref>

export default function QuestCards({ questData: Quest }) {
  // console.log("questID", Quest.id);
  return (
    <Link href={`/${Quest.id}`} passHref>
      <div
        className={styles.questContainer}
        style={{ border: "1px solid black" }}
      >
        {/* <div className="flex flex-col justify-center self-center"> */}
        <div className="flex flex-col justify-center self-center">
          {/* <Image src={require("")} width="150" height="150" alt={Quest.id} /> */}
        </div>
        <a title="lil">
          <div className={styles.questTextContainer}>
            <h2 className="text-xl m-0 p-0 text-gray-600">{Quest.id}</h2>
            <p className="text-gray-600 p-0 m-0 text-xs">{Quest.description}</p>
          </div>
        </a>
      </div>
    </Link>
  );
}

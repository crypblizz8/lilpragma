// import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/questCard.styles";
import { Quest } from "../types/index";

// <NextLink href={`/${journey.id}`} passHref>

export default function QuestCards({ questData: Quest }) {
  return (
    <Link href={`/${Quest.id}`} passHref>
      <div style={questCardStyles.questContainer as React.CSSProperties}>
        <div style={questCardStyles.topContainer as React.CSSProperties}>
          <div style={{ height: 100, width: 100, backgroundColor: "red" }} />
        </div>
        <div style={questCardStyles.bottomContainer as React.CSSProperties}>
          <h2 className="text-xl m-0 p-0 text-white">{Quest.id}</h2>
          <p className="text-slate-200 p-0 m-0 text-xs">{Quest.description}</p>
        </div>
      </div>
    </Link>
  );
}

// Had to rever to normal CSS because Tailwind was buggy.
const questCardStyles = {
  questContainer: {
    display: "flex",
    // height: "100%",
    // position: "relative",
    flexDirection: "column",
    borderRadius: 16,
    // alignItems: "stretch",
    borderWidth: 1,
    borderColor: "rgb(191, 191, 191)",
    maxWidth: 200,
    // flexGrow: 1,
  },
  topContainer: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    height: "100%",
    // height: 200,
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    // alignItems: "stretch",
    flexGrow: 1,

    backgroundColor: "#242424",
    borderColor: "rgb(0,0,0,0)",
    borderBottomLeftRadius: "1em",
    borderBottomRightRadius: "1em",
    // inlineSize: "80%",
    overflowWrap: "break-word",
  },
};

// .card{
//    height: 100%;
//    display: flex;
//    padding: 20px;
//    background: #002732;
//    color: white;
//    opacity: 0.5;
//    align-items: stretch;
//    flex-direction: column;
// }

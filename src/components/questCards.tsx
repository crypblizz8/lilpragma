import Link from "next/link";
import Image from "next/image";
import styles from "../styles/questCard.styles";
// import Quest from "../types/index";

export default function QuestCards({ questData: Quest }) {
  return (
    <div aria-disabled={Quest.available}>
      <Link href={Quest.available ? `/${Quest.id}` : "#"} passHref>
        <div
          style={questCardStyles.questContainer as React.CSSProperties}
          className="hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300"
        >
          <div style={questCardStyles.topContainer as React.CSSProperties}>
            <Image
              src={`/images/quests/${Quest?.name.replace(/\s/g, "")}.png`}
              // src={require(Quest?.img).src}
              alt={Quest.id}
              height={100}
              width={100}
            />
          </div>
          <div style={questCardStyles.bottomContainer as React.CSSProperties}>
            <h2 className="text-xl m-0 p-0 text-white">{Quest.id}</h2>
            {/* <p className="text-slate-200 p-0 m-0 text-xs">{Quest.description}</p> */}
            <p className="text-slate-200 p-0 m-0 text-xs">
              {!Quest.available ? "Coming Soon" : Quest.description}{" "}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Todo: Refactor for Tailwindf
// Had to rever to normal CSS because Tailwind was buggy.
const questCardStyles = {
  questContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgb(191, 191, 191)",
    maxWidth: 200,
    height: "100%",
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
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    backgroundColor: "#242424",
    borderColor: "rgb(0,0,0,0)",
    borderBottomLeftRadius: "1em",
    borderBottomRightRadius: "1em",
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

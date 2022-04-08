import Head from "next/head";
import Image from "next/image";
import QuestCards from "../../components/QuestCards";
import styles from "../../styles/Home.module.css";
// import styles from "../../styles/Home.module.css";
// import styles from "../styles/Home.module.css";
import { Quest } from "../../types/index";
import questData from "../../quests/quests";
import { getJourneys } from "../../quests/questData";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import TaskCard from "../../components/taskCard";

// interface Props {
//   quest: Quest;
// }

export default function QuestPage({ getQuestData }) {
  const quest = getQuestData;
  // const [result, setResult] = useState<boolean | number | undefined>();
  // const web3 = useWeb3React();
  // const task = props.task;

  // useEffect(() => {
  //   async function verify() {
  //     const result = await verifyScore(props.task, web3.account);

  //     setResult(result);
  //   }

  //   verify();
  // }, [props.task, props.address, web3.account]);

  const footerContent = (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );

  const questDescriptionContent = (
    <div className="flex flex-row item-start">
      <div className="flex flex-column">
        {/* <div className="max-w-[50%]"> */}
        <div>
          {/* <div style={{ height: 250, width: 250, background: "gray" }} /> */}
          <h1 className="text-6xl">{quest.id}</h1>
          <p className="py-6 text-xl text-slate-500">{quest.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {questDescriptionContent}
        <div className="flex flex-row flex-wrap w-5/6">
          {quest.tasks.map((e, i) => {
            return <TaskCard key={i} quest={e} />;
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getJourneysData = getJourneys();
  return {
    paths: getJourneysData.map((i) => {
      return { params: { quest: i.id } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const journeyName = context.params?.quest;
  if (!journeyName) {
    return {
      props: null,
      notFound: true,
    };
  }

  const getQuestData = getJourneys().find(
    (i) => i.id.toLowerCase() === journeyName.toLowerCase()
  );
  if (!getQuestData) {
    return {
      props: null,
      notFound: true,
    };
  }
  return {
    props: {
      getQuestData,
    },
    revalidate: 3600,
  };
};

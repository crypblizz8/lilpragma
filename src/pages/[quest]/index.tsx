import Head from "next/head";
import Image from "next/image";
// import QuestCards from "../../components/QuestCards";
import styles from "../../styles/Home.module.css";
// import styles from "../../styles/Home.module.css";
// import styles from "../styles/Home.module.css";
import { Quest, Task } from "../../types/index";
import questData from "../../quests/quests";
import { getJourneys } from "../../quests/questData";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import TaskCard from "../../components/taskCard";
import { useState, useEffect } from "react";
import { verifyScore } from "../../utils/verifier";
import { useWeb3React } from "@web3-react/core";
import { ParsedUrlQuery } from "querystring";

interface Props {
  quest: Quest;
}

interface Params extends ParsedUrlQuery {
  quest: string;
}

export default function QuestPage({ getQuestData }) {
  const quest = getQuestData;
  const web3 = useWeb3React();

  const [score, setScore] = useState(0);
  const maxScore = quest?.tasks
    .map((i) => i.points)
    .reduce((acc, i) => acc + i, 0);

  useEffect(() => {
    async function getScore() {
      let score = 0;

      if (!quest) return;

      await Promise.all(
        quest.tasks.map(async (task: Task) => {
          const result = await verifyScore(task, web3.account);
          if (result && typeof result === "boolean") {
            score += task.points;
          }
          if (result && typeof result === "number") {
            score += result;
          }
        })
      );

      setScore(score);
    }

    getScore();
  }, [quest.journey, web3.account]);
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

  const questScore = (
    <div className="flex flex-row item-start">
      <div className="flex flex-column">
        <div>
          <p className="py-2 text-xl text-slate-500"></p>
        </div>
      </div>
    </div>
  );

  const twitterHandle = quest?.creator
    ? quest?.creator.substring(quest?.creator.lastIndexOf("/") + 1)
    : null;

  const questDescriptionContent = (
    <div className="flex flex-row item-start">
      <div className="flex flex-column">
        {/* <div className="max-w-[50%]"> */}
        <div className="text-center ">
          {/* <div style={{ height: 250, width: 250, background: "gray" }} /> */}
          <h1 className="text-4xl text-center">{quest.id}</h1>
          <p className="text-xl text-center text-slate-500 pt-4">
            {quest.description}
            <br />
            Created by: {twitterHandle}
          </p>
          <p className="text-xl text-center text-slate-500">
            Score: {score} / {maxScore}
          </p>
          <a onClick={() => window.open(quest?.creator)} style={{ margin: 32 }}>
            <Image
              className="my-4"
              src="/twitterLogo.svg"
              alt="Vercel Logo"
              width={60}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ maxWidth: 1000 }}>
        {questDescriptionContent}
        {/* {questScore} */}

        <div className="grid grid-cols xs:gap-6 lg:gap-6 lg:grid-cols-3">
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

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
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

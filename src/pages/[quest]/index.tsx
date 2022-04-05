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

// interface Props {
//   quest: Quest;
// }

export default function QuestPage({ getQuestData }) {
  const quest = getQuestData;
  console.log("questPage quest", quest);

  const headContent = (
    <Head>
      <title>{quest.id}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  const questContent = (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
      {questData.map((e: Quest, i) => {
        return <QuestCards key={i} questData={e} />;
      })}
    </div>
  );

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

  const introductionContent = () => {
    return (
      <div className="flex w-full items-center">
        <div className="w-1/3 h-48 flex justify-center self-center">
          <iframe
            className="rounded-xl"
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
        <div className="w-1/3 h-48 flex justify-center self-center">
          <iframe
            className="rounded-xl"
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
        <div className="w-1/3 h-48 flex justify-center self-center">
          <iframe
            className="rounded-xl"
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    );
  };

  const mainQuestContent = () => {
    return (
      <div className="flex rounded-2xl  h-full w-full my-8 bg-red-400">
        <div className="w-full h-64"></div>
      </div>
    );
  };

  const questDescriptionContent = (
    <div className="flex flex-row">
      <div className="flex flex-column">
        {/* <div className="max-w-[50%]"> */}
        <div className="max-w-full">
          <h1 className="text-6xl">{quest.id}</h1>
          <p className="py-6 text-xl text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            mauris pharetra et ultrices neque ornare aenean. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero. Ut faucibus
            pulvinar elementum integer enim neque volutpat.
          </p>
        </div>
      </div>
      <div className="flex-auto">
        <div style={{ height: 250, width: 250, background: "gray" }} />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {headContent}
      <main className={styles.main}>
        {questDescriptionContent}
        {/* {introductionContent()} */}
        {mainQuestContent()}
      </main>
      {footerContent}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getJourneysData = getJourneys();
  //   console.log("getJourneysData3", getJourneysData);
  return {
    paths: getJourneysData.map((i) => {
    //   console.log("id", i.id);
      return { params: { quest: i.id } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const journeyName = context.params?.quest;
//console.log("journeyName", journeyName);
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
//   console.log("getJourneysData", getQuestData);
  return {
    props: {
      getQuestData,
    },
    revalidate: 3600,
  };
};

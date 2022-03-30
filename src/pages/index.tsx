import Head from "next/head";
import Image from "next/image";
import QuestCards from "../components/QuestCards";
import styles from "../styles/Home.module.css";
// import styles from "../../styles/Home.module.css";
// import styles from "../styles/Home.module.css";
import { Quest } from "../types/index";
import questData from "../quests/quests";

export default function Home() {
  const headContent = (
    <Head>
      <title>lil pragma</title>
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

  return (
    <div className={styles.container}>
      {headContent}

      <main className={styles.main}>
        <h1 className="text-6xl">lil pragma</h1>
        {/* <h1 className="text-6xl sm:text-6xl">lil pragma</h1> */}
        <p className="py-6 text-2xl text-slate-500">smoll web3 projects</p>
        {questContent}
      </main>

      {footerContent}
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Manifesto({}) {
  return (
    <div className={styles.container}>
      <h1 className="text-4xl text-center">Manifesto</h1>
      <p className="pt-6 text-center text-slate-500">
        smoll web3 projects with a lil dev score
      </p>
    </div>
  );
}

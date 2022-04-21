import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
// import { Wallet } from "./wallet";
import styles from "../styles/Home.module.css";
import Header from "./header";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const footerContent = (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
      </a>
    </footer>
  );

  return (
    <>
      <Header />
      <div>
        <title>lil pragma</title>
        <meta
          name="description"
          content="smoll web3 projects with a lil dev score"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.lilpragma.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="lil pragma" />
        <meta
          property="og:description"
          content="smoll web3 projects with a lil dev score"
        />
        <meta
          property="og:image"
          content="https://www.lilpragma.xyz/ogImage.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lilpragma.xyz" />
        <meta property="twitter:url" content="https://www.lilpragma.xyz/" />
        <meta name="twitter:title" content="lil pragma" />
        <meta
          name="twitter:description"
          content="smoll web3 projects with a lil dev score"
        />
        <meta
          name="twitter:image"
          content="https://www.lilpragma.xyz/ogImage.png"
        />
      </div>
      <main className={styles.main}>{props.children}</main>
      {/* {footerContent} */}
    </>
  );
}

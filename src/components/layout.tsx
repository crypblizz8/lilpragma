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
      <main className={styles.main}>{props.children}</main>
      {/* {footerContent} */}
    </>
  );
}

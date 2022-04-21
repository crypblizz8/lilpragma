import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import Wallet from "./wallet";
// import journey from "pages/api/journey";

export default function Header() {
  return (
    <Head>
      <title>lil pragma</title>
      <meta
        name="description"
        content="smoll web3 dev projects with a lil dev score"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/openGraph.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://lilpragma.xyz" />
      <meta property="twitter:url" content="https://lilpragma.xyz" />
      <meta name="twitter:title" content="lil pragma" />
      <meta
        name="twitter:description"
        content="smoll web3 dev projects with a lil dev score"
      />
      <meta
        name="twitter:image"
        content="https://lilpragma.xyz/openGraph.png"
      />
      <Wallet />
    </Head>
  );
}

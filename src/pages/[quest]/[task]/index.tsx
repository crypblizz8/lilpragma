import Image from "next/image";
import styles from "../../../styles/Home.module.css";

import { Quest, Task } from "../../../types/index";
import questData from "../../../quests/quests";
import { getJourneys } from "../../../quests/questData";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import TaskCard from "../../../components/taskCard";
import { useState, useEffect } from "react";
import { verifyScore } from "../../../utils/verifier";
import { useWeb3React } from "@web3-react/core";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

interface Props {
  quest: Quest;
}

interface Params extends ParsedUrlQuery {
  quest: string;
}

export default function TaskPage() {
  const router = useRouter();
  const data = router.query;

 return <div style={{ background: "red", height: 100, width: 100 }}></div>;
}

// export async function getStaticProps(context) {
//   console.log(context.params); // return { movieId: 'Mortal Kombat' }
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

// export async function getStaticPath(context) {
//   console.log(context.params); // return { movieId: 'Mortal Kombat' }
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

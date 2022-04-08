import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import { Wallet } from "./wallet";
// import journey from "pages/api/journey";

export default function Header() {
  return (
    <div>
      <Wallet />
    </div>
  );
}

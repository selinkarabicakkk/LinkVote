"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SubmitLinkForm from "../components/SubmitLinkForm";
import LinkList from "@/components/LinkList";
import AddButton from "@/components/AddButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <AddButton />
      <LinkList />
    </main>
  );
}

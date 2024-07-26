import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SubmitLinkForm from "../components/SubmitLinkForm";
import LinkList from "@/components/LinkList";

export default function Home() {
  return (
    <main>
      <Header />
      <SubmitLinkForm />
      <LinkList />
    </main>
  );
}

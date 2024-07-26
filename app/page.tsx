import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SubmitLinkForm from "../components/SubmitLinkForm";

export default function Home() {
  return (
    <main>
      <Header />
      <SubmitLinkForm />
    </main>
  );
}

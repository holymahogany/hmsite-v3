import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "@/components/hero";
import Artist from "@/components/artist";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Smyth | Portfolio</title>
        <meta name="description" content="Peter Smyth's Online Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Artist />

      {/* <Developer />
      <ArtHistorian /> */}
    </>
  );
}

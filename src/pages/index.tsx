import Head from "next/head";
import Hero from "@/components/hero";
import Artist from "@/components/artist";
import Developer from "@/components/developer";
import ArtHistorian from "@/components/artHistorian";
import Footer from "@/components/footer";

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
      <Developer />
      <ArtHistorian />
      <Footer />
    </>
  );
}

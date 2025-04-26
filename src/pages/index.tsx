import Head from "next/head";

import Hero from "@/components/hero/hero";
import Summary from "@/components/summary";
import Projects from "@/components/projects";
import Artist from "@/components/artist/artist";
import Developer from "@/components/developer";
import ArtHistorian from "@/components/artHistorian";
import Footer from "@/components/footer";

export default function Home() {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // let isMobile = useMediaQuery("(max-width:1200px)");
  // const wasEverMobile = useRef(false);
  // const wasEverDesktop = useRef(false);
  // if (isMobile) wasEverMobile.current = true;
  // if (!isMobile && counter >= 1) wasEverDesktop.current = true; // isMobile will always be false on first pass, so check again after a second

  // {isMobile && !wasEverDesktop.current
  //   ? "YES to mobile loading animation"
  //   : "NO to mobile loading animation"}

  return (
    <>
      <Head>
        <title>Peter Smyth | Portfolio</title>
        <meta name="description" content="Peter Smyth's Online Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Summary />
      <Projects />

      <Footer />
    </>
  );
}

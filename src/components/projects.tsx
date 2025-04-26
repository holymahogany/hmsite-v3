import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";

import styles from "@/styles/Home-Projects.module.css";

const imgPaths = {
  DocDeltaConcept1: "/static/img/hero/DocDeltaConcept1.webp",
  DocDeltaConcept2: "/static/img/hero/DocDeltaConcept2.webp",
  DocDeltaConcept3: "/static/img/hero/DocDeltaConcept3.webp",

  Poster1: "/static/img/hero/Poster1.webp",
  Poster2: "/static/img/hero/Poster2.webp",
  Poster3: "/static/img/hero/Poster3.webp",

  thinIce: "/static/img/hero/thinIce.gif",
  puttingTheBlocksAway: "/static/img/hero/puttingTheBlocksAway.webp",

  groceryStore: "/static/img/hero/grocery_store.webp",
  things1: "/static/img/hero/25_things.webp",
  things2: "/static/img/hero/25_things_num2.webp",
  readingWhileWalking: "/static/img/hero/reading_while_walking.webp",
};

const Projects = () => {
  let isMobile = useMediaQuery("(max-width:600px)");
  const wasEverMobile = useRef(false);
  if (isMobile) wasEverMobile.current = true;

  return (
    <div className={styles["projects"]} id="projects">
      <div className={styles["projects__outer-container"]}>
        <div className={styles["projects__inner-container"]}>
          <div className={styles["projects__text-giant-headline"]}>
            Projects
          </div>
          <div className={styles["projects__text-headline"]} id="webdev">
            Healthcare Site Frontend Redesign
          </div>
          <div className={styles["projects__text-body"]}>
            I partnered with DocDelta to refresh docdelta.com and redesign
            tdghealth.com, focusing on both user experience and frontend
            functionality. I developed the frontend for ~10 pages using custom
            React components, including a dropdown selection menu, a sliding top
            navigation bar, a multiple choice quiz, and an accordion interface.
            The result is a cleaner, more interactive site that improves
            usability across devices. (Refresh published; redesign concept not
            published. Images below are from the redesign.)
            <br />
            <br />
            Technologies used: React.js, Next.js, Typescript, Framer Motion,
            Node.js, Figma, and PHP.
          </div>
          <div className={styles["projects__images"]}>
            <Image
              className={styles["projects__image"]}
              src={imgPaths.DocDeltaConcept1}
              alt="DocDelta homepage"
              width={980}
              height={735}
            />
            <div className={styles["projects__imageSpacer"]} />
            <Image
              className={styles["projects__image"]}
              src={imgPaths.DocDeltaConcept3}
              alt="DocDelta tab interface"
              width={980}
              height={735}
            />
            <div className={styles["projects__imageSpacer"]} />
            <Image
              className={styles["projects__image"]}
              src={imgPaths.DocDeltaConcept2}
              alt="DocDelta accordion"
              width={980}
              height={735}
            />
          </div>
          <div className={styles["projects__text-headline"]} id="posters">
            University Speaking Event Posters
          </div>
          <div className={styles["projects__text-body"]}>
            I designed a series of posters to promote academic and cultural
            speaking events at Ohio State University. Each poster was tailored
            to reflect the tone and theme of the event—ranging from scholarly
            lectures to community dialogues—while maintaining a cohesive visual
            identity. I focused on clear hierarchy, dynamic layouts, and
            engaging typography to capture attention and communicate key details
            effectively. These posters were displayed online, contributing to
            increased visibility and attendance.
            <br />
            <br />
            Skills used: graphic design, typography, branding, visual
            storytelling, and Adobe Photoshop.
          </div>
          <div className={styles["projects__images"]}>
            <Image
              className={styles["projects__image"]}
              src={imgPaths.Poster1}
              alt="Queer Contemporary China poster"
              width={2550}
              height={3300}
            />
            <div className={styles["projects__imageSpacer"]} />
            <Image
              className={styles["projects__image"]}
              src={imgPaths.Poster3}
              alt="Cartoon Theory poster"
              width={1275}
              height={1595}
            />
          </div>
          <div className={styles["projects__text-headline"]} id="games">
            Independent Game Projects
          </div>
          <div className={styles["projects__text-body"]}>
            As an independent game designer (under the pen name &quot;Holy
            Mahogany&quot;), I’ve taken on every aspect of development—from
            concept to publishing—across multiple self-driven projects. My work
            reflects a passion for tight mechanics, compelling design, and
            player-first experiences.
            <br /> <br />
            One of my flagship projects,{" "}
            <a href="https://holymahogany.itch.io/thin-ice">Thin Ice</a>, is a
            fully-featured 2D platformer, built in Pico-8, the fantasy console
            known for inspiring creative constraints. This game showcases
            dynamic level design, responsive controls, and custom pixel art. The
            sound effects and music were composed by the prolific games musician
            Gruber, whose work brought an extra layer of polish and atmosphere
            to the experience. The game is available publicly on itch.io, and
            reflects my commitment to crafting polished, replayable gameplay
            loops and intuitive user experiences.
          </div>
          <div className={styles["projects__images"]}>
            <Image
              className={styles["projects__image"]}
              src={imgPaths.thinIce}
              alt="Thin Ice promo"
              width={384}
              height={384}
            />
          </div>
          <div className={styles["projects__text-body"]}>
            I also created{" "}
            <a href="https://holymahogany.itch.io/putting-the-blocks-away">
              Putting the Blocks Away
            </a>
            , a minimalist puzzle game built in Puzzlescript that emphasizes
            elegant mechanics and thoughtful level progression. The game was
            well-received across freeware game aggregator sites (even outside
            the game&apos;s original language, as below!), gaining traction
            organically through word-of-mouth and community shares. It remains
            one of my proudest experiments in designing intuitive puzzles with
            increasing complexity. The game was also featured on{" "}
            <a href="https://thinkygames.com/games/putting-the-blocks-away/">
              thinkygames.com
            </a>
            .
          </div>
          <div className={styles["projects__images"]}>
            <Image
              className={styles["projects__image"]}
              src={imgPaths.puttingTheBlocksAway}
              alt="Putting the Blocks Away on a Japanese website"
              width={778}
              height={698}
            />
          </div>
          <div className={styles["projects__text-headline"]} id="editorial">
            Editorial Illustrations
          </div>
          <div className={styles["projects__text-body"]}>
            In my personal editorial illustration work, I explore narrative,
            metaphor, and mood through visual storytelling. Each illustration is
            an opportunity to distill complex ideas into striking, thoughtful
            visuals. My process involves deep conceptual development, sketching,
            and refining compositions to communicate a clear message while
            maintaining a distinctive aesthetic. I focus on bold forms,
            intentional color palettes, and strong visual metaphors to engage
            viewers and invite interpretation. These projects not only showcase
            my range and voice as an illustrator but also reflect my interest in
            connecting ideas with audiences through visual language.
          </div>
          <div className={styles["projects__images"]}>
            <Image
              className={styles["projects__image"]}
              src={imgPaths.groceryStore}
              alt="scenes from a grocery store"
              width={1080}
              height={1080}
            />
            <div className={styles["projects__imageSpacer"]} />
            <Image
              className={styles["projects__image"]}
              src={imgPaths.things1}
              alt="25 everyday objects"
              width={1080}
              height={1080}
            />
            <div className={styles["projects__imageSpacer"]} />
            <Image
              className={styles["projects__image"]}
              src={imgPaths.readingWhileWalking}
              alt="a woman reads her book while walking distractedly"
              width={1080}
              height={1080}
            />
            <div className={styles["projects__imageSpacer"]} />
            <Image
              className={styles["projects__image"]}
              src={imgPaths.things2}
              alt="25 more everyday objects"
              width={1080}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

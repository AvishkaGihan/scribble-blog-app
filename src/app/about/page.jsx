import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Scribble</h2>
        <h1 className={styles.title}>
          Empowering developers with Next.js insights for innovative web
          solutions
        </h1>
        <p className={styles.desc}>
          At Scribble, we&apos;re on a mission to revolutionize web development
          through the power of Next.js. Our blog is a hub for developers seeking
          cutting-edge techniques, best practices, and innovative solutions. We
          dive deep into the intricacies of Next.js, exploring its vast
          potential to create lightning-fast, scalable, and user-centric web
          applications. Whether you&apos;re a seasoned pro or just starting your
          journey, Scribble is your compass in the ever-evolving landscape of
          modern web development.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>In-depth Next.js Tutorials</p>
          </div>
          <div className={styles.box}>
            <h1>1M+</h1>
            <p>Lines of Code Analyzed</p>
          </div>
          <div className={styles.box}>
            <h1>50K+</h1>
            <p> Developers Empowered</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.svg" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;

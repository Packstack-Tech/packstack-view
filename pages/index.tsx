import Head from "next/head";
import Image from "next/image";
import Logo from "../public/packstack_logo_white.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Packstack | Backpacking list creator</title>
        <meta
          name="description"
          content="Create and share packing lists for backpacking, camping or anything else."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.Splash}>
        <header className={styles.Header}>
          <div className={styles.container}>
            <div className={styles.HeaderInner}>
              <div className={styles.Logo}>
                <Image src={Logo} alt="Packstack logo" />
              </div>
              <div className={styles.BtnGroup}>
                <a href="#" className={styles.Button}>
                  Login
                </a>
                <a href="#" className={`${styles.Button} ${styles.BtnOutline}`}>
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className={styles.Hero}>
          <div className={styles.container}>
            <h1>Packing Lists for Backpackers, Campers and Explorers</h1>
            <p>
              Packstack makes it easy to plan your next adventure. Simply add
              your gear and start building your packing list. We’ll give you a
              weight breakdown so you can fine-tune your loadout.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

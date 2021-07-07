import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Packstack | Backpacking list creator</title>
        <meta
          name="description"
          content="Create packing lists for your backpacking trips."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>HOMEPAGE</p>
      </main>
    </div>
  );
}

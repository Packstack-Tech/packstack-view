import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/packstack_logo_white_sm.png";
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
        <link rel="icon" href="static/favicon.png" />
      </Head>

      <div className={styles.Splash}>
        <header className={styles.Header}>
          <div className={styles.container}>
            <div className={styles.HeaderInner}>
              <div className={styles.Logo}>
                <Image src={Logo} alt="Packstack logo" unoptimized />
              </div>
              <div className={styles.BtnGroup}>
                <a href="https://app.packstack.io" className={styles.Button}>
                  Login
                </a>
                <a
                  href="https://app.packstack.io/register"
                  className={`${styles.Button} ${styles.BtnOutline}`}
                >
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
            <div className={styles.CTABtns}>
              <a
                href="https://app.packstack.io"
                className={`${styles.Button} ${styles.BtnOutline} ${styles.BtnLarge}`}
              >
                Start Packing
              </a>
              <Link href="/pack/1659/appalachian-trail">
                <a
                  className={`${styles.Button}`}
                  style={{ textDecoration: "underline" }}
                >
                  View sample pack
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <div className={styles.Columns}>
        <div className={styles.Features}>
          <div className={`${styles.containerHalf} ${styles.Left}`}>
            <h2>Features</h2>
            <ul>
              <li>Create an unlimited number of packs</li>
              <li>Manage your entire gear inventory</li>
              <li>Assign weights in either metric or imperial units</li>
              <li>Use predefined categories or create your own</li>
              <li>Generate a shareable packing list url</li>
              <li>View a breakdown of weight by category</li>
              <li>Add notes about your expedition</li>
              <li>Mark items as worn or consumable</li>
              <li>Experiment with different pack configurations</li>
              <li>Plus, many more features in development</li>
            </ul>
          </div>
        </div>
        <div className={styles.FeaturesBg}></div>
      </div>

      <div className={styles.Columns}>
        <div className={styles.CollaborativeBg}></div>
        <div className={styles.Collaborative}>
          <div className={`${styles.containerHalf} ${styles.Right}`}>
            <h2>Collaborative by design</h2>
            <p>
              Packstack’s core application is open source, which means anyone
              can contribute to the code base and make the project better for
              everyone.
            </p>
            <p>
              We also believe that experienced backpackers should share their
              knowledge. We encourage our users to make their packs public so
              that other backpackers can be better informed while planning their
              expeditions.
            </p>
            <a
              href="https://github.com/maplethorpej/packstack"
              style={{ textDecoration: "underline" }}
            >
              Check out the open source project
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.Footer}>
        <div className={styles.container}>
          <div className={styles.FooterInner}>
            <div>
              <p>Packstack © {new Date().getFullYear()}</p>
            </div>
            <div>
              <div className={styles.BtnGroup}>
                <a href="https://app.packstack.io" className={styles.Button}>
                  Login
                </a>
                <a
                  href="https://app.packstack.io/register"
                  className={`${styles.Button} ${styles.BtnOutline}`}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

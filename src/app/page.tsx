// import Image from "next/image";
import styles from "./page.module.css";
// import nextConfig from "../../next.config.mjs";
// const BASE_PATH = nextConfig.basePath || "";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.grid}>
        <Link
          href="/tools"
          className={styles.card}
        >
          <h2>
            Tools <span>-&gt;</span>
          </h2>
        </Link>
        <Link
          href="/tools/shuffle"
          className={styles.card}
        >
          <h2>
            Tools/shuffle <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}

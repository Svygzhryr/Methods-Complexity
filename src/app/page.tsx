"use client";

import { DataStructure } from "@/types";
import styles from "./page.module.css";
import { data, defineComplexityStyles } from "@/data";

export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Average complexity</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Time complexity of data structures
          </h2>
          <div className={styles.tablesWrapper}>
            <ul className={styles.timeTable}>
              {data.map((row: DataStructure) => (
                <li
                  className={`${styles.row} ${row.type == "Type" && styles.headerRow}`}
                  key={row.type}
                >
                  <div className={styles.cell}>{row.type}</div>
                  <div
                    className={`${styles.cell} ${styles[defineComplexityStyles(row.access)]}`}
                  >
                    {row.access}
                  </div>
                  <div
                    className={`${styles.cell} ${styles[defineComplexityStyles(row.search)]}`}
                  >
                    {row.search}
                  </div>
                  <div
                    className={`${styles.cell} ${styles[defineComplexityStyles(row.insertion)]}`}
                  >
                    {row.insertion}
                  </div>
                  <div
                    className={`${styles.cell} ${styles[defineComplexityStyles(row.deletion)]}`}
                  >
                    {row.deletion}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>JS methods</h2>
          <div className={styles.tablesWrapper}></div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

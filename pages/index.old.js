import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Badge from '../components/comps2/Badge'
import DarkModeBtn from '../components/comps/DarkModeBtn1'
import { useState, useEffect } from 'react'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  const [explorerText, setexplorerText] = useState("Explore all at");
  const [explorerTop, setexplorerTop] = useState("0");

  useEffect(() => {
    function setScreenState(isBig){
      setexplorerText( isBig ? "Explore all the Components" : "Explore all at");
      setexplorerTop( isBig ? "0" : "32px");
    }
    
    let isBigWidth = window.innerWidth > 500;
    setScreenState(isBigWidth);
    
    window.addEventListener("resize", () => {
      isBigWidth = window.innerWidth > 500;
      setScreenState(isBigWidth);
    });
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>SandBoxes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout >

          <main className={styles.main}>
            <h1 className={styles.title}>
              SandBoxes <a href="http://errbint.net">by ERRBINT</a>
            </h1>

            <div className="explorer">
              <p className={styles.description}>
                {explorerText} &nbsp;
              </p>
              <Link href="/comps">
                <a>
                  <Badge kind="palegray" text="/comps"/>
                </a>
              </Link>
            </div>

            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
                >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </main>
      </MainLayout>
      

    <style>{`
      .explorer{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: ${explorerTop};
      }
      
      `}
    </style>

    </div>
  )
}

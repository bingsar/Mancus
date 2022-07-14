import Head from 'next/head'
import { useRef,useEffect } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const videoRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      videoRef.current.play()
    },5000)
  }, []);

  return (
    <div>
      <Head>
        <title>Magnus | Group</title>
        <meta name="description" content="Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <section className={styles.hero}>
            <div className={styles.mask}></div>
            <video
                ref={videoRef}
                width="250"
                playsInline
                autoPlay
                loop
                muted
                className={styles.bg__video}>
            <source src='video/bg__video.mp4' type='video/mp4' />
            </video>
              <div className={styles.hero__wrap}>
                  <div className={styles.nav__wrap}>
                      <div className={styles.logo}>
                          Mancus Group Limited
                      </div>
                  </div>
              </div>
          </section>
      </main>
    </div>
  )
}

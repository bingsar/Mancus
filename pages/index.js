import Head from 'next/head'
import { useRef,useEffect } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";

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
        <title>Mancus | Group Limited</title>
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
                      <div className={styles.logo__wrap}>
                          <div className={styles.logo}>
                            Mancus<br/>
                              <span>Group Limited</span><br />
                              <motion.span animate={{ opacity: .5 }} initial={{ opacity: 0 }} transition={{delay:.5, ease: "easeOut", duration: 3 }} className={styles.since}>Since 2004</motion.span>
                          </div>
                      </div>
                      <div className={styles.form_button}>
                          Contact us
                      </div>
                  </div>
              </div>
              <div className={styles.content__wrap}>
                  <div className={styles.content}>
                      <h3>Market advising</h3>
                      <h3>Consulting</h3>
                      <h3>Market analyze</h3>
                  </div>
                  <div className={styles.contact}>
                      <div className={styles.twitter}>
                          <div className={styles.icon__wrap}>
                              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M63.048 13.1653C60.8213 14.152 58.4293 14.8187 55.9147 15.12C58.48 13.584 60.448 11.1467 61.376 8.24532C58.976 9.66932 56.3173 10.704 53.488 11.2587C51.2213 8.84799 47.9947 7.33865 44.4213 7.33865C37.5627 7.33865 32 12.9013 32 19.7653C32 20.736 32.112 21.68 32.32 22.592C21.992 22.072 12.8427 17.1253 6.71466 9.61065C5.64799 11.4507 5.03466 13.584 5.03466 15.856C5.03466 20.1653 7.22932 23.9707 10.56 26.1973C8.52266 26.1307 6.60799 25.5733 4.93332 24.6427V24.8027C4.93332 30.8213 9.21332 35.8427 14.8987 36.984C13.8533 37.2667 12.7573 37.416 11.6267 37.416C10.8267 37.416 10.0453 37.3413 9.28799 37.1973C10.8693 42.1307 15.456 45.7253 20.8933 45.8213C16.64 49.1547 11.2827 51.1413 5.46399 51.1413C4.46132 51.1413 3.47199 51.0827 2.49866 50.968C7.99732 54.496 14.5253 56.5493 21.5387 56.5493C44.392 56.5493 56.8853 37.6213 56.8853 21.2053C56.8853 20.672 56.872 20.1333 56.848 19.6C59.2747 17.8453 61.3813 15.6613 63.0427 13.1733L63.048 13.1653Z" fill="#F2F2F2"/>
                              </svg>
                          </div>
                          <h3>@twitter</h3>
                      </div>
                      <div>Address</div>
                      <div>Phone: +11239483242343</div>
                  </div>
              </div>
          </section>
      </main>
    </div>
  )
}

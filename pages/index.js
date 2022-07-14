import Head from 'next/head'
import {useRef, useEffect, useState} from "react";
import Image from 'next/image'
import qr from '/public/qr-code.png'
import poster from '/public/video/poster.jpg'
import { motion } from "framer-motion";

import styles from '../styles/Home.module.css'

export default function Home() {

  const [isOpen, setOpen] = useState(false)

  function showFormHandler() {
      setOpen(!isOpen)
  }

  const videoRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      videoRef.current.play()
    },10)
  }, []);

  return (
    <div>
      <Head>
        <title>Mancus Group Limited</title>
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
                poster={poster}
                className={styles.bg__video}>
                <source src='video/bg__video.mov' type='video/mov' />
                <source src='video/bg__video.mp4' type='video/mp4' />
            </video>
              <div className={styles.hero__wrap}>
                  <div className={styles.nav__wrap}>
                      <div className={styles.logo__wrap}>
                          <div className={styles.logo}>
                            Mancus<br/>
                              <span>Group Limited</span><br />
                          </div>
                      </div>
                      <div className={styles.contact__wrap}>
                          <div className={styles.twitter}>
                              <a href="mailto:JK@mancusgroup.com" target="_blank"  rel="noreferrer">
                                  <div className={styles.icon__wrap}>
                                      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M20.4583 0.520996H3.54168C1.77184 0.520996 0.333344 1.96066 0.333344 3.73166V18.3092C0.333344 20.0802 1.77184 21.521 3.54168 21.521H20.4583C22.2282 21.521 23.6667 20.0802 23.6667 18.3092V3.73166C23.6667 1.96066 22.2282 0.520996 20.4583 0.520996ZM3.54168 2.271H20.4583C21.2633 2.271 21.9167 2.92433 21.9167 3.72933V4.56233L12.525 10.8238C12.2065 11.0338 11.7947 11.0362 11.475 10.8215L2.08334 4.56233V3.72933C2.08334 2.92433 2.73668 2.271 3.54168 2.271V2.271ZM20.4583 19.7687H3.54168C2.73668 19.7687 2.08334 19.1153 2.08334 18.3103V6.61333L10.53 12.2483C10.9768 12.547 11.489 12.6963 12 12.6963C12.5133 12.6963 13.0232 12.547 13.47 12.2495L21.9167 6.6145V18.3068C21.9167 19.1118 21.2633 19.7652 20.4583 19.7652V19.7687Z" fill="#F7F9F9"/>
                                      </svg>
                                  </div>
                              </a>
                          </div>
                          <div className={styles.twitter}>
                              <a href="https://twitter.com/JanKabin" target="_blank" rel="noreferrer">
                                  <div className={styles.icon__wrap}>
                                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M63.048 13.1653C60.8213 14.152 58.4293 14.8187 55.9147 15.12C58.48 13.584 60.448 11.1467 61.376 8.24532C58.976 9.66932 56.3173 10.704 53.488 11.2587C51.2213 8.84799 47.9947 7.33865 44.4213 7.33865C37.5627 7.33865 32 12.9013 32 19.7653C32 20.736 32.112 21.68 32.32 22.592C21.992 22.072 12.8427 17.1253 6.71466 9.61065C5.64799 11.4507 5.03466 13.584 5.03466 15.856C5.03466 20.1653 7.22932 23.9707 10.56 26.1973C8.52266 26.1307 6.60799 25.5733 4.93332 24.6427V24.8027C4.93332 30.8213 9.21332 35.8427 14.8987 36.984C13.8533 37.2667 12.7573 37.416 11.6267 37.416C10.8267 37.416 10.0453 37.3413 9.28799 37.1973C10.8693 42.1307 15.456 45.7253 20.8933 45.8213C16.64 49.1547 11.2827 51.1413 5.46399 51.1413C4.46132 51.1413 3.47199 51.0827 2.49866 50.968C7.99732 54.496 14.5253 56.5493 21.5387 56.5493C44.392 56.5493 56.8853 37.6213 56.8853 21.2053C56.8853 20.672 56.872 20.1333 56.848 19.6C59.2747 17.8453 61.3813 15.6613 63.0427 13.1733L63.048 13.1653Z" fill="#F2F2F2"/>
                                      </svg>
                                  </div>
                              </a>
                          </div>
                          <div className={styles.twitter}>
                              <a href="https://www.linkedin.com/in/jan-kabin-774846244/" target="_blank" rel="noreferrer">
                                  <div className={styles.icon__wrap}>
                                      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M33.3333 5H6.66667C6.22464 5 5.80072 5.17559 5.48816 5.48816C5.17559 5.80072 5 6.22464 5 6.66667V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35H33.3333C33.7754 35 34.1993 34.8244 34.5118 34.5118C34.8244 34.1993 35 33.7754 35 33.3333V6.66667C35 6.22464 34.8244 5.80072 34.5118 5.48816C34.1993 5.17559 33.7754 5 33.3333 5ZM13.8983 30.5617H9.445V16.245H13.8983V30.5617ZM11.6717 14.29C10.9874 14.29 10.3312 14.0182 9.84733 13.5343C9.36349 13.0505 9.09167 12.3943 9.09167 11.71C9.09167 11.0257 9.36349 10.3695 9.84733 9.88566C10.3312 9.40182 10.9874 9.13 11.6717 9.13C12.3559 9.13 13.0122 9.40182 13.496 9.88566C13.9798 10.3695 14.2517 11.0257 14.2517 11.71C14.2517 12.3943 13.9798 13.0505 13.496 13.5343C13.0122 14.0182 12.3559 14.29 11.6717 14.29ZM30.5633 30.5617H26.115V23.6C26.115 21.94 26.085 19.805 23.8017 19.805C21.485 19.805 21.1333 21.615 21.1333 23.4833V30.5633H16.6883V16.2467H20.955V18.2033H21.0167C21.6083 17.0783 23.0617 15.8917 25.2233 15.8917C29.73 15.8917 30.5617 18.855 30.5617 22.7117V30.5617H30.5633Z" fill="#04D484"/>
                                      </svg>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={styles.content__wrap}>
                  <div className={styles.content}>
                      <h3>IT Consulting</h3>
                      <h3>Advising</h3>
                      <h3>Market Analysis</h3>
                  </div>
                  <a href="https://www.bvifsc.vg/certificate-validation?%3FqrCode=B1E8C4EE88" target="_blank"  rel="noreferrer">
                      <div className={styles.text}>
                              About
                      </div>
                  </a>
                  <div className={styles.qr__code}>
                      <Image src={qr} layout={"responsive"} width="300" height="300"></Image>
                  </div>
              </div>
          </section>
      </main>
    </div>
  )
}

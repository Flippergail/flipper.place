import React from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flippergail's Portfolio</title>
      </Head>

      <main>
        <div className={styles.Home} id="Home">
          <ul className={styles.HomePageHeader}>
              <li className={styles.HomePageHeaderPFP}>
                  <Image
                  fill
                  src="/Images/FlipperPFP.png"
                  alt="PFP"
                  />
              </li>
              <ul className={styles.HomePageHeaderNavItems}>
                  <li className={styles.HomePageHeaderNavItem}><a className={styles.HomePageHeaderNavItemText} href='#Home'>Home</a></li>
                  <li className={styles.HomePageHeaderNavItem}><a className={styles.HomePageHeaderNavItemText} href='#Projects'>Projects</a></li>
                  <li className={styles.HomePageHeaderNavItem}><a className={styles.HomePageHeaderNavItemText} href='#About'>About</a></li>
                  <li className={styles.HomePageHeaderNavItem}><a className={styles.HomePageHeaderNavItemText} href='#Contact'>Contact</a></li>
              </ul>
          </ul>
          <h1 className={styles.HomePageTitle}>flipper.place</h1>
          <div className={styles.HomePageCenter}>
          </div>
        </div>

        <div className={styles.Experience}>
          <h2 className={styles.ExperiencePageDescription}>Languages/Frameworks/Libraries I have experience in:</h2>
        </div>
      </main>
    </>
  )
}

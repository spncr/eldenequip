import Head from 'next/head'
import Image from 'next/image'
import { useTable } from 'react-table'

import styles from '../styles/Home.module.css'

import helms from '../data/helms.json'
import chests from '../data/chests.json'
import gauntlets from '../data/gauntlets.json'
import legs from '../data/legs.json'

import AllNameRatioTables from './components/AllNameRatioTables'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elden Equip</title>
        <meta name="description" content="Elden Ring Equip Load Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className={styles.main}>
        <h1 className={styles.title}>
          Equip
        </h1>
        <small>Poise Per Weight</small>
      <AllNameRatioTables />
      </main> 
      <footer className={styles.footer}>
        <a
          href="https://spncr.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          spncr made this
        </a>
      </footer>
    </div>
  )
}

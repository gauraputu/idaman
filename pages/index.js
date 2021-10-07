import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/textBox.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iDaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PSB Alter Create
        </h1>
        <textarea className={styles2.textBox} placeholder="paste telegram text here!"></textarea>
        <button>Process</button>
      </main>

      <footer className={styles.footer}>
          Made With ♥{' '} Version 0.30
      </footer>
    </div>
  )
}

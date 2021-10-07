import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/textBox.module.css'
import Script from 'next/script'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
() => import('/public/static/query.js'),
{ ssr: false }
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
      <main className={styles.main}>
        <h1 className={styles.title}>
          PSB Alter Create
        </h1>
        <textarea className={styles2.textBox} placeholder="paste telegram text here!"></textarea>
        <button className={styles2.btnNormal} id="process">Process</button>
        {/* <Script src="/public/static/query.js" /> */}
        <DynamicComponentWithNoSSR />
      </main>

      <footer className={styles.footer}>
          Made With ♥{' '} Version 0.30
      </footer>
    </div>
  )
}

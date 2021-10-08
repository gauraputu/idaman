import styles from '../styles/Home.module.css'
import styles2 from '../styles/textBox.module.css'
import Layout from '../components/Layout'
import {proses, sheetData} from '../public/static/query.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
      <main className={styles.main}>
        <h1 className={styles.title}>
          PSB Alter Create
        </h1>
        <textarea className={styles2.textBox} id="telegramText" placeholder="paste telegram text here!"></textarea>
        <button className={styles2.btnNormal} onClick={(e)=>{proses()}}>Process</button>
        {/* {sheetData()} */}
      </main>

      <footer className={styles.footer}>
          Made With ♥ Version 0.30
      </footer>
    </div>
  )
}

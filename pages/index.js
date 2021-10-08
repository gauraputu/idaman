import styles from '../styles/Home.module.css'
import styles2 from '../styles/textBox.module.css'
import Layout from '../components/Layout'
import {proses} from '../public/static/query.js'
import useSWR from 'swr'

//fetching data on client side
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Profile () {
  const { data, error } = useSWR('https://script.google.com/macros/s/AKfycbxh6ENRLKyYif-w5j-pder-nGVIN-QL_Y88O5DOBCDxIEuHrhQS_1XR0S1om6uPcMwy3Q/exec', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return data
}

export default function Home() {

  let data=Profile();

  return (
    <div className={styles.container}>
      <Layout />
      <main className={styles.main}>
        <h1 className={styles.title}>
          PSB Alter Create
        </h1>
        <textarea className={styles2.textBox} id="telegramText" placeholder="paste telegram text here!"></textarea>
        <button className={styles2.btnNormal} onClick={(e)=>{proses(data)}}>Process</button>
      </main>

      <footer className={styles.footer}>
          Made With ♥ Version 0.30
      </footer>
    </div>
  )
}

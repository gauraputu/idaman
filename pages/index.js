import styles from '../styles/Home.module.css'
import styles2 from '../styles/textBox.module.css'
import Layout from '../components/Layout'
import { proses } from '../public/static/query.js'
import useSWR from 'swr'
import toast, { Toaster } from 'react-hot-toast';

//constatn used
const url = 'https://script.google.com/macros/s/AKfycbxh6ENRLKyYif-w5j-pder-nGVIN-QL_Y88O5DOBCDxIEuHrhQS_1XR0S1om6uPcMwy3Q/exec';

//fetching data on client side
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Profile() {
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return data
}

export default function Home() {

  //fetching data
  let data = Profile();

  const lookupData = () => {
    let result = proses(data);
    console.log(result);
    if (result == "Copied to Clipboard!") {
      toast.success('Copied to Clipboard!');
    } else {
      toast.error('not found');
    }
  }

  return (
    <div className={styles.container}>
      <Layout />
      <Toaster />
      <main className={styles.main}>
        <h1 className={styles.title}>
          PSB Alter Create
        </h1>
        <textarea className={styles2.textBox} id="telegramText" placeholder="paste telegram text here!&#10;now support multi input with delimiter ;"></textarea>
        <button className={styles2.btnNormal} onClick={lookupData}>Process</button>
      </main>

      <footer className={styles.footer}>
        Made With ♥ Version 0.32
      </footer>
    </div>
  )
}

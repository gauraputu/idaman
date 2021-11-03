import Layout from '../components/Layout';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import styles2 from '../styles/textBox.module.css';
import toast, { Toaster } from 'react-hot-toast'; //display notification
const proses = require('../public/static/query'); //to lookup data
const FetchData = require('../public/static/fetch'); //to fetch required database from google sheet

/*this component make up of PSB ALTER CREATE parts
the idea is the user just paste a telegram text in a certain format, then the apps will lookup a value based on
data in google sheet. the lookup value would immediately stored on clipboard and formatted to be ready
to use so after the user clicked the process button they just need to paste it.

the whole idea is based on:
1. google appscript to extract the data, for this apps to work you just need to paste the publised
appscript URL into /public/static/fetch.js
2. all lookup will happen client side, but before lookup can happen of course the data must already
loaded.
*/

const PsbAlter = () => {
    //fetch data from google sheet
    let data = FetchData();
    // console.log(data)

    const lookUpData = () => {
        let textToLookup = document.getElementById("telegramText").value;
        let result = proses(data, textToLookup);
        // console.log(textToLookup);

        if (result != "not found") {
            toast.success('Copied to Clipboard!');
            document.getElementById("telegramText").value = "";
            navigator.clipboard.writeText(result);
        } else {
            toast.error('not found');
        }

    };

    return (
        <>
            <div className={styles.container}>
                <Layout />
                <Toaster />
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        PSB Alter Create
                    </h1>
                    <textarea className={styles2.textBox} id="telegramText" placeholder="paste telegram text here!&#10;now support multi input with delimiter ;"></textarea>
                    <button className={styles2.btnNormal} id="processButton" onClick={lookUpData}>Process</button>
                </main>
                <Footer />
            </div>
        </>
    )
}


export default PsbAlter;
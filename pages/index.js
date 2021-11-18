import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import PsbAlter from '../components/PsbAlter';
// import { proses } from '../public/static/query.js'
const proses = require('../public/static/query');
// import useSWR from 'swr'
// import toast, { Toaster } from 'react-hot-toast';

const Home = () => (
  <>
    <Layout />
    <Navbar />
    <PsbAlter />
  </>
)

export default Home;
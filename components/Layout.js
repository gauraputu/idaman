import Head from 'next/head';
import { Navbar } from 'reactstrap';

const Layout = ({Children}) => {
    return (
    <>
        <Head>
            <title>iDaman</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {Children}
    </>
    )
};

export default Layout;
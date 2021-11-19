import Head from 'next/head';
// import { Children } from 'react';
import { Navbar } from 'reactstrap';

const Layout = ({Children}) => {
    return (
    <>
        <Head>
            <title>iDaman</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Navbar />
        {Children}
    </>
    )
};

export default Layout;
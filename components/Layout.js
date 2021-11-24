import Head from 'next/head';

const Layout = ({Children}) => {
    return (
    <>
        <Head>
            <title>iDaman</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {Children}
    </>
    )
};

export default Layout;
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>MyTop App</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                  rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;


import Head from "next/head";
import "../styles/globalstyle.scss"
import Toast from "@/Component/Toast/Toast";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TECH SOLUTIONS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Toast
      />

      <Component {...pageProps} />
    </>
  );
}

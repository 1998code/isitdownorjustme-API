import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website Monitor API</title>
        <meta name="description" content="A simple API project." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Website Monitor API</a>.
        </h1>
      </main>
    </div>
  )
}

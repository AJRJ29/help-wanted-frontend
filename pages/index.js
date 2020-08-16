import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EditProfile from '../components/editprofile'
import Signup from '../components/Signup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
      <EditProfile />
      
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Ads from '../components/Ads'
import Branding from '../components/Branding'
import NavBar from '../components/NavBar'
import NavBar2 from '../components/NavBar2'
import Testimonials from '../components/Testimonials'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopCoders</title>
        <meta name="description" content="Shopping app for coders by coders!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Ads/>
      <Branding/>
      <Testimonials/>

    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>E-COMMERCE</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>

          <a href="/api/auth/login">
            <h2 className={inter.className}>Login</h2> 
          </a>

          <a href="/api/auth/logout">
            <h2 className={inter.className}>LogOut</h2>
          </a>
        </div>
      </main>
    </>
  )
}

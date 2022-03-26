import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../src/context/AuthProvider'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Firebase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {user?.email}
        <img src={user?.photoURL} alt="" />
      </main>
    </div>
  )
}

export default Home

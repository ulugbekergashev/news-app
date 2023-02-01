import Head from 'next/head'
import NewsBody from '../components/NewsBody';
import styles from '../styles/Home.module.scss'
import NavBar from './../components/Navbar';
import { useState } from 'react';
export async function getServerSideProps() {

  const request = await 
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7ece7a64a30d4473a55f69ba3815d8d9`)
  .then((res) => res.json()
  )
  
  return {
    props: {
      results: request.articles ,
    }
  }
}

export default function Home({results}) {
  // console.log(results)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Fake Ecommerce Store with FakeStoreApi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main+ " container mt-3"} >
        <NewsBody results={results} />
      </div>
    </>
  )
}

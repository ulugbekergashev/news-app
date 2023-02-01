import { useRouter } from 'next/router'
import React from 'react'
import NewsCard from './../../../components/NewsCard';

export async function getServerSideProps(context) {
  const searchResults = context.params.searchResult
  
  const request = await 
  fetch(`https://newsapi.org/v2/everything?q=${searchResults}&from=2023-01-18&to=2023-01-18&sortBy=popularity&apiKey=7ece7a64a30d4473a55f69ba3815d8d9`)
  .then(res => res.json())
  
  return {
    props: {
      results: request.articles ,
    }
  }

}

export default function SearchPage({results}) {
  console.log(results)
  return (
    <div className='container d-flex flex-wrap gap-3'>
      {
        results.map((result) => <NewsCard key={result.id} result={result} />)
      }
    </div>
  )
}

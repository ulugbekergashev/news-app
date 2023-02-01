import { useRouter } from 'next/router'
import React from 'react'
import NewsCard from './../../../components/NewsCard';

export async function getServerSideProps(context) {
  const pagecountry = context.params.country
  
  const request = await 
  fetch(`https://newsapi.org/v2/top-headlines?country=${pagecountry}&apiKey=7ece7a64a30d4473a55f69ba3815d8d9`)
  .then(res => res.json())
  
  return {
    props: {
      results: request.articles ,
    }
  }

}

export default function CountryPage({results}) {
  console.log(results)
  return (
    <div className='container d-flex flex-wrap gap-3'>
      {
        results.map((result) => <NewsCard key={result.id} result={result} />)
      }
    </div>
  )
}

import React from 'react'
import NewsCard from './NewsCard'

export default function NewsBody({results}) {
  console.log(results)
  return (
    <div className="d-flex mt-1 flex-wrap gap-3 justify-content-between">
      {
        results.map((result) => <NewsCard key={result.title} result={result} />)
      }
    </div>
  )
}

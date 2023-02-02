import React from 'react'
import  Image  from 'next/image';
import style from "../styles/NewsCard.module.scss"

export default function NewsCard({result}) {
    // console.log(JSON.stringify(result.description))
    function createMarkup() {
      return {__html: (result.content)?.slice(0,200)};
    }
  return (
    <div className={style.newscard}>
        <img src={`${result.urlToImage}`} alt={`image not found`} />
        <h2>{result.title}</h2>
        <div dangerouslySetInnerHTML={createMarkup()} ></div>
        <div className={style.source}>
          <div className={style.published}>{result.publishedAt}</div>
          <div>source: <a href={result.url} target="_blank" rel="noreferrer">{result.source.name}</a> </div>
        </div>
    </div>
  )
}

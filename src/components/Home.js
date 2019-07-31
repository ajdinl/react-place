import React from 'react'
import { useFetch } from "./hooks"


function Home() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos/"
  )
  return (
      <>
        {loading ? (
          "Loading..."
        ) : (
          <div className='compWidth'>
            {data
              .filter(firstTen => firstTen.id < 10)
              .map(({ id, title, url, thumbnailUrl }) => (
                <div className='styleOfPhotos' key={data.id}>
                  <a href={url}>
                  <img alt={title} src={thumbnailUrl} />
                  </a>
                  <p>{title}</p>
                </div>
              ))}
          </div>
        )}
      </>
  )
}

export default Home
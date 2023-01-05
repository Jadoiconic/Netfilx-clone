import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../constant/product'

function HomePage() {
  return (
    <div className='text-white'>
        <Main />
        <Row title="Popular" fetchUrl={requests.requestPoplar} />
        <Row title="Trending" fetchUrl={requests.requestTrending} />
        <Row title="Top Rated" fetchUrl={requests.requestTopRated} />
        <Row title="Upcoming" fetchUrl={requests.requestUpcoming} />
    </div>
  )
}

export default HomePage
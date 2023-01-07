import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../constant/product'

function HomePage() {
  return (
    <div className='text-white'>
        <Main />
        <Row rowId={1} title="Popular" fetchUrl={requests.requestPoplar} />
        <Row rowId={2} title="Trending" fetchUrl={requests.requestTrending} />
        <Row rowId={3} title="Top Rated" fetchUrl={requests.requestTopRated} />
        <Row rowId={4} title="Upcoming" fetchUrl={requests.requestUpcoming} />
        <Footer />
    </div>
  )
}

export default HomePage
import React from 'react'
import Container from "./components/Container.jsx"
import Banner from './components/Banner'
import Category from './components/Category'
import FlashDeals from './components/FlashDeals'
import FeatureProducts from './components/FeatureProducts'

const Home = () => {
  return (
    <>
    <div>
      <Container>
        <Banner/>
        <Category/>
        <FlashDeals/>
        <FeatureProducts/>
      </Container>
    </div>
    </>

  )
}

export default Home
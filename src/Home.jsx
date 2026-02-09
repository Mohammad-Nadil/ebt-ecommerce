import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='w-full h-[300px] bg-blue-200 text-3xl font-bold text-center py-32'>
      Home page
    </div>
    <Footer></Footer>
    </>

  )
}

export default Home
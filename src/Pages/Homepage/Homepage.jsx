import React from 'react'
import Hero from './Hero'
import Pets from './Pets'
import FriendCard from './FriendCard'
import Products from './Products'
import Sellers from './Sellers'
import Blog from './Blog'
import Footer from '../../Components/Footer'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <Pets/>
    <FriendCard/>
    <Products/>
    <Sellers/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Homepage
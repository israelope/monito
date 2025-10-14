import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Blog from './Blog'
import Friend from './Friend'
import Hero from './Hero'
import More from './More'
import Products from './Products'
import Sellers from "./Sellers"

const Home = () => {
  return (
    <> 
    <Navbar/>
    <Hero/>
    <More/>
    <Friend/>
    <Products/>
    <Sellers/>
    <Friend/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home
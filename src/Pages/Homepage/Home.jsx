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
    <main>
      <div className='px-20 py-5'>
      <Navbar />
      </div>
      <div className='p-20'>
        <Hero />
        <More />
        <Friend />
        <Products />
        <Sellers />
        <Friend />
        <Blog />
      </div>
      
        <Footer />
    </main>
  )
}

export default Home
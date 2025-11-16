import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Category from './Pages/CategoryPage/Category'
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Category' element={<Category/>}></Route>
      <Route path='/About' element={<About/>}></Route> 
      <Route path='/Contact' element={<Contact/>}></Route>


      
    </Routes>
  )
}

export default App

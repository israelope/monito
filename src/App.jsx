import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage/Homepage'
import Category from './Pages/CategoryPage/Category'
import CategoryPage from './CategoryPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Category' element={<Category/>}></Route>
      <Route path='/About' element={<CategoryPage/>}></Route> 

      
    </Routes>
  )
}

export default App

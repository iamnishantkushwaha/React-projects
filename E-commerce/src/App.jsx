import React from 'react'
 import Navbar from './components/Navbar'
 import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ShoppingCart from './pages/ShoppingCart'
const App = () => {
  return (
    <div className='min-h-screen min-w-full'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/categories' element={<Categories/>}/>
         <Route path='/cart' element={<ShoppingCart/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
import React from 'react'
 import Navbar from './components/Navbar'
 import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ShoppingCart from './pages/ShoppingCart'
import Checkoutpage from './pages/Checkoutpage'
import OrderConfirmation from './pages/OrderConfirmation'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
const App = () => {
  return (
    <div className='min-h-screen min-w-full'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/categories' element={<Categories/>}/>
         <Route path='/cart' element={<ShoppingCart/>}/>
          <Route path='/checkout' element={<Checkoutpage/>}/>
          <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/editprofile' element={<EditProfile/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
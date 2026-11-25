import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Navbar from './component/navbar'
import Footer from './component/footer'
import ProductDetails from './Pages/productDetails'
import Cart from './Pages/cart.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/products/:id' element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
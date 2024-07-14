import React from 'react'
import { CartProvider } from './Components/CartContext'
import CartPage from './Components/CartPage'

function App() {
  return <>
   <CartProvider>
      <CartPage />
    </CartProvider>
  
  </>
}

export default App


import React from 'react'
import Container from './components/UI/Container'
import Header from './components/Layout/Header'
import ProductsList from './components/Products/ProductsList'
import { useSelector } from 'react-redux'
import { AppState } from './types/redux'
import Cart from './components/Cart/Cart'

function App () {
  const cartIsVisible = useSelector((state: AppState) => state.ui.cartIsVisible)

  return (
    <div className={'antialiased min-h-screen w-full bg-gray-800'}>
      <Header/>

      <Container>
        {cartIsVisible && <Cart/>}

        <ProductsList/>
      </Container>
    </div>
  )
}

export default App

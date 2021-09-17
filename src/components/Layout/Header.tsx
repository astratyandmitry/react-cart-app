import React from 'react'
import HeaderBasketButton from './HeaderBasketButton'
import Container from '../UI/Container'

function Header () {
  return (
    <header className={'border-b border-gray-700 py-4 mb-8'}>
      <Container className={'flex items-center justify-between'}>
        <div className={'text-gray-100 text-2xl font-light'}>
          Cart<span className={'opacity-50'}>App</span>
        </div>

        <div>
          <HeaderBasketButton/>
        </div>
      </Container>
    </header>
  )
}

export default Header

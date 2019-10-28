import React from 'react'
import {Link} from 'react-router-dom'
import '../../App'
import './Header.css'

const Header = (props) => {
    return (
      <header>
        <h1 class="title">Fruits</h1>
        <span class="items-in-cart">{`${props.cartLength} items in cart`}</span>
        <button><Link to="/cart">View Cart</Link></button>
      </header>
    )
  }
export default Header
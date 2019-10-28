import React from 'react'
import {Link} from 'react-router-dom'
import '../../App'

const Header = (props) => {
    return (
      <header>
        <h1>{`${props.cartLength} items in cart`}</h1>
        <h1>Fruits</h1>
        <button><Link to="/cart">Cart</Link></button>
      </header>
    )
  }
export default Header
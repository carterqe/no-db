import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'

class Cart extends Component {
  render() {
    return (
      <div >
        <ul>
          {this.props.itemsInCart.map(fruit => (
            <div key={fruit.id} className="fruits-item">
              <img src={fruit.img} alt={fruit.name} />
              <h6>{fruit.name}</h6>
              <button onClick={() => this.props.clickHandler(fruit.id)}>Remove from cart</button>
            </div>
          ))}
        </ul>
        <button><Link to="/">Home</Link></button>
      </div>
    );
  }
}

export default Cart
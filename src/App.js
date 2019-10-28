import React, { Component } from 'react';
import { Cart, Home } from './routes'
import { Header } from './components'
import { Switch, Route } from "react-router-dom";
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cartItems: []
    }
  }

  componentDidMount() {
    axios.get('/api/cart')
      .then(res => this.setState({ cartItems: res.data}))
  }

  addToCart = item => {
    axios
      .post('/api/fruits', { item })
        .then(response => {
          this.setState({ cartItems: response.data })
        })
  }

  removeFromCart = id => {
    axios
      .delete('/api/fruits/' + id)
        .then(response => {
          this.setState({ cartItems: response.data })
        })
  }

  render() {
  return (
    <main>
      <Header cartLength={this.state.cartItems.length}/>
      <Switch>
        <Route exact path="/">
          {
            <Home addClickHandler={fruit => this.addToCart(fruit)} />
          }
        </Route>
        <Route path="/cart">
          {
            <Cart itemsInCart={this.state.cartItems} clickHandler={id => this.removeFromCart(id)}/>
          }
        </Route>
      </Switch>
    </main>
    );
  }
}

export default App;

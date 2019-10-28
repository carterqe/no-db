import React, { Component } from 'react'
import './Item.css'
import axios from 'axios'

class Item extends Component {

  constructor() {
    super()
    this.state = {
      toggleEdit: false,
      value: ''
    }
  }

  toggle = () => {
    this.setState({  toggleEdit: !this.state.toggleEdit});
  }

  handleChange = value => {
    this.setState({ value: value })
  }

  updateItem = fruit => {
    fruit.name = this.state.value // refactor
    axios 
      .put('/api/fruits/' + fruit.id, {item: fruit})
      .then(res => {
        this.setState({ toggleEdit: false })
        this.props.updateItems(res.data)
      })
  }

  render () {
    return (
      <div key={this.props.fruit.id} className="fruits-item">
        <img src={this.props.fruit.img} alt={this.props.fruit.name} />
        {
          this.state.toggleEdit
            ? <input defaultValue={this.props.fruit.name} onChange={e => this.handleChange(e.target.value)} />
            : <h6>{this.props.fruit.name}</h6>
        }
        <button onClick={() => this.props.addClickHandler(this.props.fruit)}>Add to cart</button>
        <button onClick={() => this.toggle()}>{!this.state.toggleEdit ? 'Edit' : 'Close'}</button>

        {
          this.state.toggleEdit &&
            <button onClick={() => this.updateItem(this.props.fruit)}>Save</button>
            // <button onClick={() => this.props.updateClickHandler(this.props.fruit, this.state.value)}>Save</button>
        }
      </div>
    )
  }
}

export default Item
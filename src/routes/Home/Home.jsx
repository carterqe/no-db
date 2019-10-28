import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import Item from '../../components/Item/Item'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      fruits: []
    };
  }

  componentDidMount() {
    this.getFruits();
  }

  getFruits = () => {
    axios.get("/api/fruits").then(response => {
      const fruits = response.data;
      this.setState({ fruits });
    });
  }

  updateItems = items => {
    this.setState({ fruits: items })
  }

  render() {
    return (
      <div className="fruits-container">
      {
        this.state.fruits.map(fruit => {
          return (
            <Item 
              key={fruit.id} 
              fruit={fruit} 
              addClickHandler={(fruit) => this.props.addClickHandler(fruit)}
              updateItems={(items) => this.updateItems(items)}
            />
          );
        })
      }
    </div>
    );
  }
}
export default Home;
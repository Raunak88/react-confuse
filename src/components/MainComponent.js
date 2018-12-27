import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import{DISHES} from '../shared/dishes'

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
      selectedDish:null
    };
}
    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }   
  
  render() {
      return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
          <NavbarBrand href="/">Confusion</NavbarBrand>
          </div>         
        </Navbar>
        <Menu dishes = {this.state.dishes} onClick = {(dishId)=>this.onDishSelect(dishId)}/>
        <Dishdetail dishdetail={this.state.dishes.filter((dish)=>dish.Id ===this.state.selectedDish)[0]} />       
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsArray from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter';

class App extends Component {

  state = {
    hogs: [],
    filter: ""
  }

  componentDidMount() {
    this.setState ({hogs: hogsArray })
  }

filterOn = (button) => {
  
  switch (button) {
    case 'greased': 
    this.setState({filter: 'greased'})
      break;
    case 'name': 
    this.setState({filter: 'name'})
    break;
    case 'weight':
      this.setState({filter: 'weight'})
      break;
    default: 
    this.setState({filter: ''})
  }
    }

sortHogs = (filter) => {
let filteredHogs = []

switch (filter) {
  case 'greased':  
  filteredHogs = this.state.hogs.filter(hog =>
    hog.greased)
    return filteredHogs
    break;
  case 'name': 
  filteredHogs = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))
  return filteredHogs
  break;
  case 'weight':
    filteredHogs = this.state.hogs.sort((a, b) => a.weight - b.weight)
    return filteredHogs
    break;
    default: 
    return this.state.hogs
}
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter  sortHogs={this.filterOn}/>
        <HogContainer hogs={this.sortHogs (this.state.filter)} /> 
      </div>
    );
  }
}

export default App;




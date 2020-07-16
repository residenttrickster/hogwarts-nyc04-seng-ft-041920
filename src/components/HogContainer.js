import React from "react";
import Hog from './Hog';


class HogContainer extends React.Component {

  renderImage = (name) => {
  const newName = name.split(' ').join('_').toLowerCase()
  const img = require(`../hog-imgs/${newName}.jpg`);
  return img
  }

  renderHogs = () => {
  return this.props.hogs.map(hog => 
      <Hog name = {hog.name}
      image = {this.renderImage(hog.name)}
      specialty = {hog.specialty}
      greased = {hog.greased}
      weight={hog.weight}
      medal = {hog['highest medal achieved']}
      /> 
      )
    }

  render() {
    return (
      <div>
        <h1>HogContainer</h1>
        {this.renderHogs()}
      </div>
    );
  }
}

export default HogContainer;


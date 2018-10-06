import React, { Component } from 'react';
class Storyitems extends Component{

  render(){
    console.log(this.props.index)
    const background = this.props.index % 2 === 0 ? 'white':'blue';
    return (
        <li style ={{backgroundColor:background,listStyle:'none'
    }}>
        {this.props.title}</li>
    )
  }
}
export default Storyitems;


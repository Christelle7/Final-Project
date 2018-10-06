import React, { Component } from 'react';
class PuppyImage extends Component{

  render(){
    // check if url is an image or a video
    let dogPic;
    if(this.props.url.endsWith('4')){

    } else{
      dogPic= <img className ="puppy-image" src={this.props.url} />
    }


    return(
      <div> 
        {dogPic}
       </div>
    )
  }
}
export default PuppyImage;


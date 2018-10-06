import React, { Component } from 'react';
class PuppyImage extends Component{

  render(){
    // check if url is an image or a video
    let dogPic;
    if(this.props.url.endsWith('4')){
      dogPic = <video controls autoplay='true' src={this.props.url} > Sorry you're browser does not support video playback </video>

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


import React, { Component } from 'react';
import './App.css';
import PuppyImage from './components/puppies';

class App extends Component {

  state={
      dogurl :''
  };

  componentDidMount(){
    this.callApi();  
    
  }

  callApi=()=>{
    console.log('here');
      fetch('https://random.dog/woof.json')
      .then(data => data.json())
      .then(dogurl => {
        console.log(dogurl,'data')
        this.setState({dogurl:dogurl.url})
        
      })  

  }
  
  render() {
    return (
      <div className="App">
          <h1>  DOGS </h1>
          <PuppyImage 
            url={this.state.dogurl}
          />
          <button onClick ={this.callApi}> Puppy Love </button>
      </div>
    );
  }
}

export default App;

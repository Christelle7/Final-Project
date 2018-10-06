import React, { Component } from 'react';
import './App.css';
import Storyitems from './components/storyitems';


class App extends Component {

  state={
      dogurl :''
  };

  componentDidMount(){
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
          <div> <img src={this.state.dogurl} /> </div>
      </div>
    );
  }
}

export default App;

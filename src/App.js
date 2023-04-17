import React, { Component } from 'react';

import Homepage from './components/homepage.js'

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Homepage/>
      </div>
    );
  }
}

export default App;

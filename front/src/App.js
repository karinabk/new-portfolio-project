import React, { Component } from 'react';
import './App.css';
import Me from './assets/photo.jpg';

import Introduction from './components/Introduction';
import Experience from './components/Experience';


class App extends Component {
  render() {
    return (
      <div>
        <Introduction image={Me} className="me" photoTitle="It is me!"/>
        <Experience />
        
      </div>
    );
  }
}

export default App;

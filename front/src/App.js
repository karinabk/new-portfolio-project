import React, { Component } from 'react';
import './App.css';
import Me from './assets/photo.jpg';

import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Research from './components/Research';


class App extends Component {
  render() {
    return (
      <div>
        <Introduction image={Me} className="me" photoTitle="It is me!"/>
        <Experience />
        <Awards />
        <Research />
        
      </div>
    );
  }
}

export default App;

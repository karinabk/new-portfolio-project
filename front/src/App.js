import React, { Component } from 'react';
import './App.css';
import Me from './assets/photo.jpg';

import bts from './assets/image.png';
import Introduction from './components/Introduction';
import Experience from './components/Experience';


class App extends Component {
  render() {
    return (
      <div>
        <Introduction image={Me} className="me" photoTitle="It is me!"/>
        <Experience image={bts} className="bts" photoTitle="The first day of the first internship :)"/>
        
      </div>
    );
  }
}

export default App;

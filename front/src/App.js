import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import ScrollableAnchor from 'react-scrollable-anchor';


class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <ScrollableAnchor id={'experience'}>
          <Experience />
        </ScrollableAnchor>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Clock from './components/clock/clock';
import Contact from './components/contact/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
          
          <Welcome name="Rian" />
          <Clock />
          <Contact />
          
        
        
      </div>
    );
  }
}


export default App;
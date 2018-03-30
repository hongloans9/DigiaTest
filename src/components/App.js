import React, { Component } from 'react';
import './App.css';
import ParticipantsList from './participants_list';
import AddNew from './add_new_form';
import logo from '../nord-logo.PNG';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-name">
            <img src={logo} alt="logo"/>
            Nord Software</h3>
        </header>
        <div className="container">
          <h3 className="title">List of participants</h3>
          <AddNew />
          <ParticipantsList />
        </div>
      </div>
    );
  }
}

export default App;

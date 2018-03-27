import React, { Component } from 'react';
import './App.css';
import ParticipantsList from './participants_list';
import AddNew from './add_new_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-name">Nord Software</h2>
        </header>
        <div className="App-content">
          <h3 className="title">List of participants</h3>
          <AddNew />
          <ParticipantsList />
        </div>
      </div>
    );
  }
}

export default App;

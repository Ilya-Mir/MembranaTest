import React, { Component } from 'react';
import DateForm from './component/dateForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test</h1>
        </header>
        <DateForm />
      </div>
    );
  }
}

export default App;

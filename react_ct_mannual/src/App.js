import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const pushEvent = (parameter) => (event) => {
    window["pushEvent"](parameter);
  }
  const onUserLogin = (parameter) => (event) =>{
    window["onUserLogin"](parameter);
  }
  const onProfileUpdate = (parameter) => (event) =>{
    window["onProfileUpdate"](parameter);
  }
  const pushChargedEvent = (parameter) => (event) =>{
    window["pushChargedEvent"](parameter);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <button
          onClick={pushEvent("Product Viewed")}
        >
          Event Push!
        </button>
        <button
          onClick={pushChargedEvent()}
        >
          Charged Event Push!
        </button><button
          onClick={onUserLogin("TestProfile ReactMannual")}
        >
          User Login!
        </button><button
          onClick={onProfileUpdate()}
        >
          Profile Update!
        </button>
      </header>
    </div>
  );
}


export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk';

function App() {
  const eventPush = () => (event) => {
    const event_name = document.getElementById('event_name').value
    const values = [...eventInputs];
    if (values.length == 0) {
      clevertap.event.push(event_name);
    } else {
      const props = {};
      values.forEach(element => {
        props[element.value[0]] = element.value[1];
      });
      clevertap.event.push(event_name, props);
    }
    console.log('CT event Pushed');
  }

  const onUserLogin = () => (event) => {
    const properties = [...profileInputs];
    if (properties.length != 0) {
      //Converting in Json format
      const props = {};
      properties.forEach(element => {
        props[element.value[0]] = element.value[1];
      });

      clevertap.onUserLogin.push({
        "Site": props
      })
    } else {
      console.log('No User properties');
    }
  }

  const userProfileUpdate = () => (event) => {
    const properties = [...profileInputs];
    if (properties.length != 0) {
      //Converting in Json format
      const props = {};
      properties.forEach(element => {
        props[element.value[0]] = element.value[1];
      });

      clevertap.profile.push({
        "Site": props
      })
    } else {
      console.log('No User properties');
    }
  }

  /*
  const onUserLogin = () => (event) => {
    clevertap.onUserLogin.push({
      "Site": {
        "Name": "TestProfile ReactSDK",            // String
        "Email": "ct_react_sdk@gmail.com",         // Email address of the user
        "Phone": "+14155551234",           // Phone (with the country code)
        "Gender": "M",                     // Can be either M or F
      }
    })
    console.log('CT profile Pushed');
  }

  const userProfileUpdate = () => (event) => {
    clevertap.profile.push({
      "Site": {
        "Gender": "F",
        "Name": "TestProfile ReactSDK1",
      }       // Can be either M or F
    })
    console.log('CT profile updated');
  }
  */
  //For Event Properties 
  const [eventInputs, setEventInputs] = useState([]);

  const handleEventChange = (index, event, keyVal) => {
    const values = [...eventInputs];
    if (keyVal == 'KEY') {
      values[index].value[0] = event.target.value;
    } else {
      values[index].value[1] = event.target.value;
    }
    setEventInputs(values);
  };

  const handleEventAdd = () => {
    setEventInputs([...eventInputs, { value: ['', ''] }]);
  };

  const handleEventRemove = (index) => {
    const values = [...eventInputs];
    values.splice(index, 1);
    setEventInputs(values);
  };

  // For Profile Properties
  const [profileInputs, setProfileInputs] = useState([
    { value: ['Name', 'TestProfile ReactSDK'] },
    { value: ["Email", "ct_react_sdk@gmail.com"] }
  ]);

  const handleProfileChange = (index, event, keyVal) => {
    const values = [...profileInputs];
    if (keyVal == 'KEY') {
      values[index].value[0] = event.target.value;
    } else {
      values[index].value[1] = event.target.value;
    }
    console.log(values);
    setProfileInputs(values);
  };

  const handleProfileAdd = () => {
    setProfileInputs([...profileInputs, { value: ['', ''] }]);
  };

  const handleProfileRemove = (index) => {
    const values = [...profileInputs];
    values.splice(index, 1);
    setProfileInputs(values);
  };


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

        {profileInputs.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              value={input.value[0]}
              placeholder='Property Key'
              onChange={(event) => handleProfileChange(index, event, 'KEY')}
            />
            <input
              type="text"
              value={input.value[1]}
              placeholder='Property Value'
              onChange={(event) => handleProfileChange(index, event, 'VALUE')}
            />
            <button type="button" onClick={() => handleProfileRemove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleProfileAdd}>
          Add Profile Property
        </button>
        <div>
          <button onClick={onUserLogin()}>
            User Login
          </button>
          <button onClick={userProfileUpdate()}>
            Update Profile
          </button></div>
        <br></br>
        <form>
          <div>
            <input id='event_name'
              type="text"
              placeholder='Event Name' />

            <button type="button" onClick={eventPush()}>
              Push Event
            </button>
          </div>
          {eventInputs.map((input, index) => (
            <div key={index}>
              <input
                type="text"
                value={input.value[0]}
                placeholder='Property Name'
                onChange={(event) => handleEventChange(index, event, 'KEY')}
              />
              <input
                type="text"
                value={input.value[1]}
                placeholder='Property Value'
                onChange={(event) => handleEventChange(index, event, 'VALUE')}
              />
              <button type="button" onClick={() => handleEventRemove(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleEventAdd}>
            Add Event Property
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;

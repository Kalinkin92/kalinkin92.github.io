import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
const logo = '/ms-icon-144x144.png';
const gif = '/1490615640_1491-flag-ukrainy.gif';
const gimn = '/zasluzhennyy-hor-ukrainy-gimn-ukrainy.mp3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Хохло кiт</h1>
        </header>
          <div className="App-body">
              <p className="App-intro">
                  ибав вас в рiт
              </p>
              <img src={gif} alt="СЛАВА УРАИНИ" />
              <p className="App-intro">Слава Україні!
              </p>
              <audio controls>
                      <source src={gimn} type="audio/mpeg"/>
                          Your browser does not support the audio element.
              </audio>

          </div>
      </div>
    );
  }
}

export default App;

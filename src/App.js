import './App.css';
import NavMenu from './components/NavMenu';
import FirstContainer from './components/FirstContainer';
import UserComponent from './components/HomeContainer';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';



class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor:'#ebf0f4',height:'98vh'}}>
        <NavMenu />
      
      </div>
    );
  }
}

export default App;


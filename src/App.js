import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Detail from './Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Productlist from './Productlist'

class App extends Component {
  render() {
    return (
      <div className="App">
                <Nav />

        <Switch>

          <Route exact path="/" component={Productlist}/>
            <Route exact path="/detail" component={Detail}/> 
          
        </Switch>
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { useState } from 'react'
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import ShoppingPage from "./components/ShoppingPage"
import ItemPage from "./components/ItemPage"

import {BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"

function App() {
  const location = useLocation()

  return (
    <div 
      className="App" 
      style={{ overflowY: location.pathname === "/" ? 
              "scroll" : "hidden"}}
    >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shoppingpage/:collection" component={ShoppingPage} />
          <Route exact path="/shoppingpage/:collection/:item" component={ItemPage} />
        </Switch>
    </div>
  );
}

export default App;

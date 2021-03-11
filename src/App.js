import './App.css';
import React, { useState } from 'react'
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import ShoppingPage from "./components/ShoppingPage"
import ItemPage from "./components/ItemPage"

import { Switch, Route, useLocation } from "react-router-dom"

function App() {
  const [basket, setBasket] = useState([])
  const location = useLocation()

  const handleAddBasket = (item) => { setBasket([...basket, item]) }

  return (
    <div className="App" style={{ overflowY: location.pathname === "/" ? "scroll" : "hidden"}}>
        <Header basket={basket}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shoppingpage/:collection" component={ShoppingPage} />
          <Route 
            exact path="/shoppingpage/:collection/:id" 
            render={(props) => (
              <ItemPage {...props} onAddBasket={handleAddBasket} />
            )}
          />
        </Switch>
    </div>
  );
}

export default App;

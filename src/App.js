import './App.css';
import React, { useState } from 'react'
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import ShoppingPage from "./components/ShoppingPage"
import ItemPage from "./components/ItemPage"
import inventory from "./components/inventory"
import BasketPage from "./components/BasketPage"
import { Switch, Route, useLocation } from "react-router-dom"

function App() {
  const [basket, setBasket] = useState([])
  const location = useLocation()

  const handleAddBasket = (item, quantity) => {
    inventory.find(inventoryItem => inventoryItem.id === item.id).stock -= quantity

    const newBasket = [...basket]
    let newItem = newBasket.find(basketItem => basketItem.item.id === item.id)

    if(newItem === undefined) {
      newItem = { item: item, quantity: quantity }
      setBasket([...newBasket, newItem]) 
    }
    else {
      newItem.quantity += quantity
      setBasket(newBasket) 
    } 
  }

  // TODO: Rename ItemQ to ItemBasket
  const deleteBasket = (itemQ) => {
    setBasket(basket.filter(basketItem => basketItem.item.id !== itemQ.item.id))
    inventory.find(inventoryItem => inventoryItem.id === itemQ.item.id).stock += itemQ.quantity
  }

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
          <Route 
            exact path="/basket" 
            render={(props) => (
              <BasketPage {...props} basket={basket} deleteBasket={deleteBasket}/>
            )}
          />
        </Switch>
    </div>
  );
}

export default App;

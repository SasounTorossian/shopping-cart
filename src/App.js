import './App.css';
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import ShoppingPage from "./components/ShoppingPage"
import Footer from "./components/Footer"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shoppingpage" component={ShoppingPage} />
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

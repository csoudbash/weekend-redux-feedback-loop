import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
<>


<div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>

      <Router>
        <div className='App'>
        <Header/>

          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
          {/* <Route path="/" exact>
            <Home />
          </Route>  */}
          <Route path="/pizza-options">
            <PizzaOptions />
          </Route>
          <Route path="/customer-info">
            <CustomerInfo />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/administrator">
            <Administrator />
          </Route>
        </div>
      </Router>


  </>  
  );
}

export default App;

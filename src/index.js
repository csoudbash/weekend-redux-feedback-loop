import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware} from 'redux';


// REDUCERS!!! 


// END REDUCERS

//STORE
const storeInstance = createStore(
    combineReducers(
        {
        
        }
    ),
    applyMiddleware(
        logger
    )

);
// END STORE

ReactDOM.render(
<Provider store= {storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

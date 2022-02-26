import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware} from 'redux';


// REDUCERS!!! 
const feedback = (state = {
feeling: 0,
understanding: 0,
support: 0,
comments: '',
},
action) => {
    
    if(action.type === 'ADD_FEELING'){
        // const { feeling } = action.payload 
        return{
            ...state,
            feeling: action.payload
        }
    }
    if(action.type === 'ADD_UNDERSTANDING'){
        // const { understanding } = action.payload 
        return{
            ...state,
            feeling: action.payload 
        }
    }
    if(action.type === 'ADD_SUPPORT'){
        // const { support } = action.payload 
        return{
            ...state,
            feeling: action.payload 
        }
    }
    if(action.type === 'ADD_COMMENTS'){
        // const { comments } = action.payload 
        return{
            ...state,
            feeling: action.payload 
        }
    }
    return state;
}

// END REDUCERS

//STORE
const storeInstance = createStore(
    combineReducers(
        {
        feedback
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

import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';



import Header from '../Header/Header';

//routes to pages
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewPage from '../ReviewPage/ReviewPage';
import AdminPage from '../AdminPage/AdminPage';
import ThanksPage from '../ThanksPage/ThanksPage';

function App() {

  return (
    <>
        
        <Router>
          <div className='App'>
          <Header/> 
            
            <Route path="/" exact>
              <Feeling />
            </Route> 
            <Route path="/understanding">
              <Understanding />
            </Route>
            <Route path="/support">
              <Supported />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/review">
              <ReviewPage />
            </Route> 
            <Route path="/thanks">
              <ThanksPage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route> 
          </div>
        </Router>

    </>  
  );
}

export default App;

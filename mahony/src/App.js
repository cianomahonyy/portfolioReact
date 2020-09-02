import React from 'react';
import './App.css';
import Design from './components/design/Design';
import Coding from './components/coding/Coding';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    
        
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/design" exact component={Design} />
              <Route path="/coding" exact component={Coding} />
            </Switch>
          </div>
        </Router>
    
    



  );
}

export default App;

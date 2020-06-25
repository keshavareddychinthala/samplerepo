import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './components/Table';
import Rawdata from './components/Rawdata'

function App() {
  return (
    <div className="container-fluid">
      <Router>
           <Switch>
             <Route path="/"  exact component={Table}/>
             <Route path="/rawjson"  component={Rawdata}/>
           </Switch>

      </Router>
    </div>
  );
}

export default App;

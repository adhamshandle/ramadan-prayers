import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import register from './components/register/register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

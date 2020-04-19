import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import register from './components/register/register';
import login from './components/login/login';
import todoform from './components/todolist/todoform';
import TodoList from './components/todolist/todolist';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={register} />
        <Route path="/login" component={login} />
        <Route path="/todo" component={TodoList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import register from './components/register/register';
import login from './components/login/login';
import todoform from './components/todolist/todoform';
import TodoList from './components/todolist/todolist';
import HeaderTop from './components/headertop/headertop';
import HeaderBottom from './components/headerbottom/headerbottom';

function App() {
  return (

      <BrowserRouter>
        {/* <HeaderTop /> */}
        <HeaderBottom />
        <Switch>
          <Route path="/signup" component={register} />
          <Route path="/login" component={login} />
          <Route path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

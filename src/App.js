import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finder from './pages/Finder';
import Manager from './pages/Manager';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Finder} />
        <Route path="/manager" component={Manager} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

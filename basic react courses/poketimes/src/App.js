import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/:post_id" component={Post}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users';
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/contact" element={Contact} />
            <Route path="/users" element={Users} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

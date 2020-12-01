import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Footer from "./components/Footer"




function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
        </div>
    </Router>

  );
}

export default App;

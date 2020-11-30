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
      <Navbar />
      <Route exact path="/" component={Home} />
      <Projects />
      <Footer />
    </Router>

  );
}

export default App;

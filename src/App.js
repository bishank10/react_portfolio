import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";




function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Footer />
        </div>
    </Router>

  );
}

export default App;

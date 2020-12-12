import React from 'react';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route  exact path={["/react_portfolio","/home"]} component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route  exact path="/about" component={About} />
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./searchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

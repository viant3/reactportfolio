import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from "./pages/index";
import portfolio from "./pages/portfolio";
import contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



class App extends Component {
  render() {
    return (
   
        <Router>
           <Navbar />
          <div className="App">    
            <Switch>
            <Route exact path="/" component={index} />
              <Route exact path="/portfolio" component={portfolio} />
              <Route exact path="/contact" component={contact} />
            </Switch>
          </div>
          <Footer />
        </Router>
    );
  }
}

export default App;

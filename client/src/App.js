import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import index from "./pages/index";
import portfolio from "./pages/portfolio";
import Visitor from "./pages/visitor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



class App extends Component {
  render() {
    return (
   
      <HashRouter>
          <div>
           <Navbar />
             
            <Switch>
            <Route exact path="/" component={index} />
              <Route path="/portfolio" component={portfolio} />
              <Route path="/visitor" component={Visitor} />
            
            </Switch>
       
          <Footer />
          </div>
          </HashRouter>
    );
  }
}

export default App;
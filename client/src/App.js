import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import index from "./pages/index";
import portfolio from "./pages/portfolio";
import Visitor from "./pages/visitor";
import index2 from "./pages/index2";




class App extends Component {
  render() {
    return (
   
      <HashRouter>
          <div>
          
             
            <Switch>
            <Route exact path="/" component={index} />
              <Route path="/portfolio" component={portfolio} />
              <Route path="/visitor" component={Visitor} />
              <Route path="/vptest" component={index2} />
            
            </Switch>

          </div>
          
          </HashRouter>
    );
  }
}

export default App;
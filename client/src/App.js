import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Visitor from "./pages/visitor";
import index2 from "./pages/index2";




class App extends Component {
  render() {
    return (

      <HashRouter>
        <div>


          <Switch>
            <Route exact path="/" component={index2} />
            <Route path="/visitor" component={Visitor} />
          </Switch>

        </div>

      </HashRouter>
    );
  }
}

export default App;
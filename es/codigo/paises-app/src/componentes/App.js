import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import ListadoPaises from './ListadoPaises';
import NoExiste from './NoExiste';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/paises" component={ListadoPaises}></Route>
            <Route component={NoExiste}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

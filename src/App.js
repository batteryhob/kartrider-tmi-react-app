import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Main from './views/Main/index';
import User from './views/User/index';

import NoMatch from './views/Main/index';

class App extends Component {

  render() {

    let { location } = this.props;

    return (
      <div className="App">
        <Switch location={location}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/user" component={User}/> 
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
    
  }

}

export default withRouter(App);
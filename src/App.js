import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Main from './views/Main/index';
import User from './views/User/index';

import NoMatch from './views/Main/index';
import './i18n';

class App extends Component {

  render() {
    let { location } = this.props;
    return (
      <Switch location={location}>
        <Route exact path="/drift" component={Main}/>
        <Route exact path="/drift/user/:nick" component={User}/> 
        <Route component={NoMatch}/>
      </Switch>
    )
    
  }

}

export default withRouter(App);
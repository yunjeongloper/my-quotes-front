import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import GenericNotFound from './pages/NotFound/NotFound';
import Main from './components/Main';
import List from './components/List';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/list" component={List} />
          {/* <Route path="/404" component={GenericNotFound} /> */}
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";

import Login from './login/login';
import Home from './home/home';
import Detail from './detail/index';
import NoMatch from './components/nomatch/index'

export default class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    permission:true
  }
  }
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" render={(props)=>{
          return this.state.permission?<Home/>:<Redirect
          to={{
            pathname: "/login",
            state:props.location
          }}
        />
        }}/>
        <Route path="/login" component={Login} />
        <Route path="/detail/:id" component={Detail} />
        <Route component={NoMatch}/>
        </Switch>
    </Router>
    )
  }
};
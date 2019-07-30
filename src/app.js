import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";

import Login from './page/login/login';
import Register from './page/register/index';
import Home from './page/home/home';
import Detail from './page/detail/index';
import NoMatch from './components/nomatch/index';
import Storage from './storage/index';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    login:false
  }
  }
  componentDidMount(){
    console.log("did",this.state.login);
   let user = Storage.get("user");
   if(user){
     this.setState({
       login:true
     })
   }
  }
  render() {
    console.log(this.state.login);
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/register" component={Register} />
        <Route component={NoMatch}/>
        </Switch>
    </Router>
    )
  }
};

export default App;
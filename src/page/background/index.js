import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";

import Login from '../login/login';
import Register from '../register/index';
import Storage from '../../storage/index';
import Publish from '../publish/index';
import Manager from '../manager/index';
import Edit from '../edit/index';

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
        <Route exact path="/background/login" component={Login}/>
        <Route path="/background/register" component={Register} />
        <Route path="/background/publish" component={Publish} />
        <Route path="/background/edit/:id" component={Edit} />
        <Route path="/background/manager" component={Manager} />
        <Redirect to="/background/login"/>
        </Switch>
    </Router>
    )
  }
};

export default App;
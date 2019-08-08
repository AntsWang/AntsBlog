import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";

import Home from '../home/home';
import Detail from '../detail/index';
import Storage from '../../storage/index';

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
        <Route exact path="/blog/list" component={Home}/>
        <Route path="/blog/p/:id" component={Detail} />
        <Redirect to="/blog/list" />
        </Switch>
    </Router>
    )
  }
};

export default App;
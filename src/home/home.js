
import React,{Component} from "react" 
import { Layout } from 'antd';
import './home.css';

import Header from '../components/header/header';
import Content from '../components/content/content';
import {setPageTitle} from '../redux/action.js'
import Util from '../http/http.js';

import {connect} from 'react-redux';

import Storage from '../storage/index';

class Home extends Component{
  constructor(props){
  super(props);
  //this.getData = this.getData.bind(this);
  }
  componentDidMount(){
    console.log(this.props);
    console.log(Storage.get("lll"));
      this.getData();
  }
  getData(){
    console.log(1111);
    Util.get("http://192.168.1.4:8080/list",(data)=>{
                console.log(data);
    },(err)=>{
console.log(err);
    });
  }
  render(){
      return (
        <div className="home-container">
          <Header/>
          <Content/>
        </div>)
  }
}
const mapStateToProps = (state)=>{
  return {
   pageTitle:state.pageTitle.title
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return {
    setPageTitle(data){
       dispatch(setPageTitle(data))
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)


import React,{Component} from "react" 
import { Layout } from 'antd';
import './home.css';

import Header from '../components/header/header';
import Content from '../components/content/content';
import Util from '../http/http.js';

export default class Home extends Component{
  constructor(props){
  super(props);
  //this.getData = this.getData.bind(this);
  }
  componentDidMount(){
    console.log(1111);
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

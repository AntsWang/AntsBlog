
import React,{Component} from "react" 
import { Layout } from 'antd';
import './home.css';

import Header from '../components/header/header';
import Content from '../components/content/content';

export default class Home extends Component{
render(){
    return (
    <div className="home-container">
      <Header/>
      <Content/>
    </div>)
}}

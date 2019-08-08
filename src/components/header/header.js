import React, {Component} from 'react';
import { Input } from 'antd';
import Dropdown from '../dropdown';
import './header.css';
import { BrowserRouter as Router, Route, Link,Redirect,Switch,withRouter,NavLink} from "react-router-dom";
const Search = Input.Search;
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink className="title" href="#">Ants的Blog</NavLink>
        <NavLink to="/home" className="h-1 flex1">首页</NavLink> 
        <NavLink className="h-4 flex1">留言板</NavLink>
        <NavLink className="h-4 flex1">网易云音乐</NavLink>
        <div className="h-6">
        <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
        </div> 
        <div className="h-7 flex1">
           <Dropdown keys={["主页","发表博客","退出"]}/>
        </div> 
      </div>
    )
  }
};
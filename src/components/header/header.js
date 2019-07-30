import React, {Component} from 'react';
import { Input } from 'antd';
import Dropdown from '../dropdown';
import './header.css';
const Search = Input.Search;
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="title" href="#">Ants的Blog</a>
        <a className="h-1 flex1">首页a</a> 
        <a className="h-2 flex1">分类</a>
        <a className="h-3 flex1">归档</a>
        <a className="h-4 flex1">留言板</a>
        <a className="h-5 flex1">统计</a>
        <div className="h-6">
        <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
        </div> 
        <div className="h-7 flex1">
           <Dropdown keys={["主页","我的收藏","退出"]}/>
        </div> 
      </div>
    )
  }
};
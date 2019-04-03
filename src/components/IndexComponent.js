import React, {Component} from 'react'
import './index.css'
export default class IndexComponent extends Component {
  render() {
    return (
      <div>
        <h2>首页</h2>
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">博客</a></li>
          <li><a href="">生活</a></li>
        </ul>
      </div>
    )
  }
};
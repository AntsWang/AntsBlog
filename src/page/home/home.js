
import React, { Component } from "react"
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
import './home.css';

import Header from '../../components/header/header';
import Content from '../../components/content/content';
import { setPageTitle } from '../../redux/action'
import Util from '../../http/http';

import { connect } from 'react-redux';

import Storage from '../../storage/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    //this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let that = this;
    Util.get(Util.baseUrl + "/list", (data) => {
      if(data.fleg=='login'){
        
      }else{
        console.log(data);
        this.setState({
          list: data.data || []
        })
      }

    }, (err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="list-home-container">
        <Header />
        <Content list={this.state.list} />
      </div>)
  }
}
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle.title
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setPageTitle(data) {
      dispatch(setPageTitle(data))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

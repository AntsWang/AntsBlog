import {
    Menu, Dropdown, Icon, message,Avatar 
  } from 'antd';
import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {loginOut} from '../redux/action';
import { BrowserRouter as Router, Route, Link,Redirect,Switch,withRouter } from "react-router-dom";
class DropdownItem extends Component{
    onClick({ key }){
      if(key==0){
        this.props.history.push('/home');
      }
      if(key == 1){
        this.props.history.push('/publish');
      }
      if(key==2){
        this.props.loginOut();
        console.log( this.props);
         this.props.history.replace('/');
      }
      };
      render(){
        const menu = (
            <Menu onClick={this.onClick.bind(this)}>
            {
                this.props.keys.map((item,index)=>{
                    return <Menu.Item key={index}>{item}</Menu.Item>
                })
            }
            </Menu>
          );
          return(
     <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <Icon type="down" />
      </a>
    </Dropdown>
          )
      }

  }

  const mapStateToProps = (state)=>{
    return {
     pageTitle:state.pageTitle.title
    }
  }
  
  const mapDispatchToProps = (dispatch,props)=>{
    return {
      loginOut(){
         dispatch(loginOut())
      }
    }
  
  }
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DropdownItem))
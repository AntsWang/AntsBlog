import {
    Menu, Dropdown, Icon, message,Avatar 
  } from 'antd';
import React,{ Component } from 'react';
  export default class DropdownItem extends Component{
    onClick({ key }){
        message.info(`Click on item ${key}`);
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
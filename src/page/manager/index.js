import './index.css'
import React from 'react';
import ManagerMenu from '../../components/managerMenu'
import  { Form, Icon, Input, Button, Checkbox,message } from "antd";
import Storage from '../../storage/index';
import {connect} from 'react-redux';
import {loginIn,loginOut} from '../../redux/action';
import {Link,Redirect} from 'react-router-dom';
import Utils from '../../http/http';
import Table from './arctileEdit';
import Modals from '../../components/modal/index';
import Publish from '../publish/index';
class  Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            type:1,       
            showModal:false,
            showLoading:false,
            deleteId:""
        }
       
    }
    changeType = (item)=>{
        console.log(item);
        this.setState({
            type:item.key
        })
    }
    showModal = (id)=>{
        console.log(id);
        this.setState({
            showModal:true,
            deleteId:id
        })
    }
    hideModal = ()=>{
        this.setState({
            showModal:false
        })
    }
    //确定删除
    handleOk = ()=>{
        let that = this;
        this.setState({
            showLoading:true
        })
        console.log("delete",Utils.baseUrl+'/user/delete/'+this.state.deleteId);
        Utils.get(Utils.baseUrl+'/user/delete/'+this.state.deleteId,function(res){
            console.log(res)
            message.info(res.message);
            if(res.flag=='SUCCESS'){
                that.setState({
                    showLoading:false,
                    showModal:false
                })
            }else if(res.flag=='login'){
            }
          },function(err){
            console.log(err);
          })
    }
    render() {
        return (
            <div className="mcontainer">
                {
                    this.state.type==1?<div className = 'mtitle' style={{width:'100%',height:30,display:'flex'}}>
                    <div style={{fontSize:16,fontWeight:"bold"}}>博客管理</div>
                    <div style={{fontSize:30,fontWeight:"bold"}} onClick = {()=>{this.setState({type:2})}}>+</div>
                </div>:null
                }

                <div className="right">
                    {
                        this.state.type==1?<Table showModal = {(id)=>this.showModal(id)}/>:null
                    }
                                        {
                        this.state.type==2?<Publish/>:null
                    }
                </div>
            <Modals handleOk = {()=>{this.handleOk()}} showLoading = {this.state.showLoading} hideModal = {this.hideModal} text = {"确定删除该文章吗?"} showModal = {this.state.showModal}/>
            </div>
        );
    }
}

export default Manager;
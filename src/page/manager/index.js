import './index.css'
import React from 'react';
import ManagerMenu from '../../components/managerMenu'
import  { Form, Icon, Input, Button, Checkbox,message } from "antd";
import Storage from '../../storage/index';
import {connect} from 'react-redux';
import {loginIn,loginOut} from '../../redux/action';
import {Link} from 'react-router-dom';
import Utils from '../../http/http';
import Table from './arctileEdit';
import Modals from '../../components/modal/index';
import Publish from '../publish/index'
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
        this.setState({
            showLoading:true
        })
        console.log("delete",Utils.baseUrl+'/delete/'+this.state.deleteId);
        Utils.get(Utils.baseUrl+'/delete/'+this.state.deleteId,function(res){
            console.log(res)
            message.info(res.message);
            if(res.flag=='SUCCESS'){
                that.setState({
                    showLoading:false,
                    showModal:false
                })
            }
          },function(err){
            console.log(err);
          })
    }
    render() {
        return (
            <div className="mcontainer">
                <div className="left">
                <ManagerMenu changeType = {this.changeType}/>
                </div>
                <div className="right">
                    {
                        this.state.type==1?<Table showModal = {(id)=>this.showModal(id)}/>:null
                    }
                                        {
                        this.state.type==4?<Publish/>:null
                    }
                </div>
            <Modals handleOk = {()=>{this.handleOk()}} showLoading = {this.state.showLoading} hideModal = {this.hideModal} text = {"确定删除该文章吗?"} showModal = {this.state.showModal}/>
            </div>
        );
    }
}

export default Manager;
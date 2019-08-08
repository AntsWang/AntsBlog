import React from 'react'
import  { Form, Icon, Input, Button, Checkbox,message } from "antd";
import './index.css'
import Storage from '../../storage/index';
import {connect} from 'react-redux';
import {loginIn,loginOut} from '../../redux/action';
import Utils from '../../http/http';
class NormalLoginForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let that = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let {userName,password,confirm_password} = values;
        if(password!=confirm_password){
          message.info('两次密码输入不一致！');
        }else{
          let param = {
            userName,
            password
          }
          Utils.post(Utils.baseUrl+'/addUser',param,function(res){
            console.log(res)
            message.info(res.message);
            if(res.flag=='SUCCESS'){
              that.props.history.replace({pathname:"/home"});
            }

          },function(err){
            console.log(err);
          })
        }
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="login-container">
      <Form  onSubmit={this.handleSubmit.bind(this)} className="login-form"><Form.Item>
        
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirm_password', {
            rules: [{ required: true, message: '确认密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;
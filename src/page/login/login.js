import React from 'react'
import  { Form, Icon, Input, Button, Checkbox,message } from "antd";
import './login.css'
import Storage from '../../storage/index';
import {connect} from 'react-redux';
import {loginIn,loginOut} from '../../redux/action';
import {Link} from 'react-router-dom';
import Utils from '../../http/http';
class NormalLoginForm extends React.Component {
  handleSubmit(e){
    let that = this;
    e.preventDefault();
    console.log(this.props);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let param = {
          userName:values.userName,
          password:values.password
        }
        Utils.post(Utils.baseUrl+'/login',param,function(res){
          console.log(res)
          message.info(res.message);
          if(res.flag=='SUCCESS'){
            that.props.history.replace({pathname:"/background/manager"});
          }

        },function(err){
          console.log(err);
        })
        
        // Storage.set("user",values);
        // this.props.history.replace({pathname:"/home"});
        // console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="login-container">
      <Form  onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <Form.Item>
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码？</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          Or <Link to="/register">立即注册!</Link>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;
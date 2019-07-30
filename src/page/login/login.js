import React from 'react'
import  { Form, Icon, Input, Button, Checkbox, } from "antd";
import './login.css'
import Storage from '../../storage/index';
import {connect} from 'react-redux';
import {loginIn,loginOut} from '../../redux/action';
import {Link} from 'react-router-dom';
class NormalLoginForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    console.log(this.props);
    this.props.form.validateFields((err, values) => {
      if (!err) {

        
        Storage.set("user",values);
        this.props.history.replace({pathname:"/home"});
        console.log('Received values of form: ', values);
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
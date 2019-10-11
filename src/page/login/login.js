import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import './login.css'
import Storage from '../../storage/index';
import { connect } from 'react-redux';
import { loginIn, loginOut } from '../../redux/action';
import { Link } from 'react-router-dom';
import Utils from '../../http/http';
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:''
    }
  }
  handleSubmit(e) {
    let that = this;
    e.preventDefault();
    console.log(this.props);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let param = {
          userName: values.userName,
          password: values.password
        }
        if (values.remember) {
          Storage.set("user", values);
        } else {
          Storage.delete('user');
        }
        Utils.post(Utils.baseUrl + '/login', param, function (res) {
          console.log(res)
          message.info(res.message);
          if (res.flag == 'SUCCESS') {
            window.token = res.data.token;
            Storage.set("uid",res.data.token);
            that.props.history.replace({ pathname: "/background/manager" });
          }

        }, function (err) {
          console.log(err);
        })
        // Storage.set("user",values);
        // this.props.history.replace({pathname:"/home"});
        // console.log('Received values of form: ', values);
      }
    });
  }
  componentDidMount() {
    let user = Storage.get("user");
    console.log(user,1000000)
    if(user){
             this.setState({
               userName:user.value.userName,
               password:user.value.password,
               remember:user.value.remember
             })
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
              initialValue:this.state.userName
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
              initialValue:this.state.password
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: this.state.remember,
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
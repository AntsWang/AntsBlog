import { Modal } from 'antd';
import React from 'react';
export default class Modals extends React.Component {
  handleOk = () => {
      console.log("ok")
this.props.handleOk()
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.props.hideModal()
  };

  render() {
    return (
        <Modal
        cancelText = "取消"
        okText = "确定"
          title="提示"
          visible={this.props.showModal}
          onOk={this.handleOk}
          confirmLoading={this.props.showLoading}
          onCancel={this.handleCancel}
        >
          <p>{this.props.text}</p>
        </Modal>
    );
  }
}
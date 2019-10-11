import React from 'react'
import { Input, message, Icon, Button } from "antd";
import './index.css'
import Storage from '../../storage/index';
import { connect } from 'react-redux';
import { loginIn, loginOut } from '../../redux/action';
import Utils from '../../http/http';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
const { TextArea } = Input;
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: null,
      title: '',
      summary: '',
      id: ''
    }
  }
  componentDidMount() {
    console.log(this.props);
    let detail = this.props.location.state.detail;
    this.setState({
      editorState: BraftEditor.createEditorState(detail.content),
      title: detail.name,
      summary: detail.summary,
      id: detail.id
    })
  }
  submitContent() {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    const result = saveEditorContent(htmlContent)
  }

  handleEditorChange(editorState) {
    this.setState({ editorState })
  }
  setText(text, type) {
    let text1 = text.target.value;
    this.setState({
      [type]: text1
    })
  }
  publish() {
    let { title, summary, editorState } = this.state, that = this;
    if (title == "" || summary == "" || editorState == null) {
      message.info('请填写全部内容后发布');
    } else {
      let param = {
        title,
        summary,
        content: editorState.toHTML(),
        id: this.state.id
      }
      Utils.post(Utils.baseUrl + '/user/edit', param, function (res) {
        console.log(res)
        message.info(res.message);
        if (res.flag == 'SUCCESS') {
          that.setState({
            editorState: null,
            title: '',
            summary: ''
          })
          that.props.history.goBack();
        }

      }, function (err) {
        console.log(err);
      })
    }

  }
  render() {
    const { editorState } = this.state;
    return (
      <div className="wraper">
        <div className="container">
          <h3 className="title">编辑博客</h3>
          <Input value={this.state.title} onChange={(value) => this.setText(value, "title")} className="head" placeholder="请输入标题" addonBefore={<Icon type="setting" />} />
          <TextArea value={this.state.summary} onChange={(text) => this.setText(text, "summary")} className="miaoshu"
            placeholder="请输入描述"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
          <div className="braft">
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange.bind(this)}
              onSave={this.submitContent.bind(this)}
            />
          </div>

          <Button onClick={() => { this.publish() }} className="btn" type="primary" block>
            编辑
    </Button>
        </div>

      </div>

    );
  }
}
export default NormalLoginForm;
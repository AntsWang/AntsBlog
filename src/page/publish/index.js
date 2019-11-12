import React from 'react'
import  { Input,message,Icon,Button } from "antd";
import './index.css'
import Storage from '../../storage/index';
import {connect} from 'react-redux';
import {loginIn,loginOut} from '../../redux/action';
import Utils from '../../http/http';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
const { TextArea } = Input;
class NormalLoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editorState:null,
            title:'',
            summary:'',
            image:'',
            imageName:''
        } 
        this.input = React.createRef();
    }

    submitContent(){
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        const result = saveEditorContent(htmlContent)
      }
    
      handleEditorChange(editorState){
        this.setState({ editorState })
      }
setText(text,type){
    let text1 = text.target.value;
    this.setState({
        [type]:text1
    })
}
publish(){
    let {title,summary,editorState,image,imageName} = this.state,that = this;
    if(title==""||summary==""||editorState==null){
message.info('请填写全部内容后发布');
    }else{
        let param = {
            title,
            summary,
            content:editorState.toHTML(),
            image,
            imageName
        }
        Utils.post(Utils.baseUrl+'/user/publish',param,function(res){
            console.log(res)
            message.info(res.message);
            if(res.flag=='SUCCESS'){
              that.setState({
                editorState:null,
                title:'',
                summary:''
              })
              //that.props.history.replace({pathname:"/home"});
            }
  
          },function(err){
            console.log(err);
          })
        console.log(title,summary,editorState&&editorState.toHTML());
    }
    
} 
handleImageChange(e){
  let that = this;
  let {image} = that.state,file = e.target.files[0];
console.log('2222220',e.target.files[0].name)
let fr = new FileReader();
fr.readAsDataURL(file)
fr.onload = function(){
  console.log(fr.result)
    that.setState({
      image:this.result,
      imageName:file.name
    })
}

}
  render() {
    const { editorState } = this.state;
    return (
        <div className="wraper">
 <div className="containerPub">
            <h3 className="title">发表博客</h3>
            <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
              {
                this.state.image?<img style={{width:100,height:100}} src = {this.state.image}/>:null
              }
               
               <label style={{paddingTop:10,paddingBottom:10}} for='upload'>封面图片</label>
               <Input id = 'upload' style={{display:"none"}}  onChange={(e)=>this.handleImageChange(e)} onClick = {()=>{}} ref = {this.input}  type='file' accept='image/*'/>
               
            </div>
            
           <Input value={this.state.title} onChange={(value)=>this.setText(value,"title")} className="head" placeholder="请输入标题" addonBefore={<Icon type="setting" />}/>
           <TextArea value = {this.state.summary} onChange={(text)=>this.setText(text,"summary")} className="miaoshu"
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
    
          <Button onClick={()=>{this.publish()}} className="btn" type="primary" block>
      发布
    </Button>
      </div>

        </div>
       
    );
  }
}
export default NormalLoginForm;
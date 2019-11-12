import React from 'react'
import  { Input,message,Icon,Button } from "antd";
import './index.css'
import Utils from '../../http/http';
class Upload extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            file:'',
            fileName:''
        } 
        this.input = React.createRef();
    }
publish(){
    let {file,fileName} = this.state,that = this;
        let param = {
            file,
            fileName
        }
        Utils.post(Utils.baseUrl+'/upload',param,function(res){
            console.log(res)
            message.info(res.message);
            if(res.flag=='SUCCESS'){
              //that.props.history.replace({pathname:"/home"});
            }
          },function(err){
            console.log(err);
          })
} 
handleImageChange(e){
  let that = this;
  let file = e.target.files[0];
console.log('2222220',e.target.files[0].name)
let fr = new FileReader();
fr.readAsDataURL(file)
fr.onload = function(){
  console.log(fr.result)
    that.setState({
      file:this.result,
      fileName:file.name
    })
}

}
  render() {
    return (
        <div className="wraper">
 <div className="containerPub">
            <h3 className="title">文件上传</h3>
            <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
               <label style={{paddingTop:10,paddingBottom:10}} for='upload'>选择文件</label>
               <Input id = 'upload' style={{display:"none"}}  onChange={(e)=>this.handleImageChange(e)} onClick = {()=>{}} ref = {this.input}  type='file' accept='*'/>
               
            </div>
          <Button onClick={()=>{this.publish()}} className="btn" type="primary" block>
      上传
    </Button>
      </div>

        </div>
       
    );
  }
}
export default Upload;
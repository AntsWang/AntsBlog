import React, { Component } from 'react';
import { Input,Button  } from 'antd';
const { TextArea } = Input;
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{display: 'flex',flexDirection: "column"}}>
            <TextArea rows={4} />
            <Button style={{marginTop:10}} type="primary">发表评论</Button>
            </div>

        );
    }
}

export default Comment;
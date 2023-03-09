import React from 'react';
import {Form, Button, Input , notification} from 'antd'
import axios from 'axios';

const UpdatePost = (props) => {
    const { TextArea } = Input;
    const updatePost = (values) => {
       // notification 
        notification.open({
            message: 'The post has been updated !',
            duration: 5,
            placement: "bottomLeft",
            className: 'notification-update'
            
        });
        // create the new data
        values = {

            userId: 1,
            title: values.title,
            body: values.body,

        }
        axios.put(`http://localhost:3000/posts/${props.post.id}`, values)
        .then(response => {
            props.setcounter(props.counter+1); // event encoutner to make the database call and get the new data
            // props.setdata({...props.data,...response.data});
            // props.setfilter({...props.filter, ...response.data});
        })
        .catch(error => {
            console.log(error);
        });
        props.setmodal(false)
  
      }
    return (
        <Form layout='vertical' onFinish={updatePost}>
            <Form.Item label='Title' name='title' required={true}>
                <Input placeholder={props.post.title} className="post-input">

                </Input>
            </Form.Item>
            <Form.Item label='Text' name='body' required={true}>
                <TextArea rows={5} placeholder={props.post.body}>
                
                </TextArea>
            </Form.Item>
            <Button htmlType='submit' type='primary'>
                update
            </Button>
        </Form>
    );
};
export default UpdatePost;
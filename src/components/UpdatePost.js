import React from 'react';
import {Form, Button, Input , notification} from 'antd'
import axios from 'axios';

const UpdatePost = (props) => {
    const { TextArea } = Input;
    const updatePost = (values) => {
       // notification 
        notification.open({
            message: 'Le commentaire a été modifié ! ',
            duration: 5,
            placement: "topRight",
            className: 'notification-update'
            
        });
        // create the new data
        values = {

            userId: 2,
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
            <Form.Item label='Titre' name='title' required={true}>
                <Input required={true} placeholder={props.post.title} className="post-input">

                </Input>
            </Form.Item>
            <Form.Item label='Commentaire' name='body' required={true}>
                <TextArea required={true} rows={5} placeholder={props.post.body}>
                
                </TextArea>
            </Form.Item>
            <Button htmlType='submit' className='post-form-btn'>
                modifier
            </Button>
        </Form>
    );
};
export default UpdatePost;
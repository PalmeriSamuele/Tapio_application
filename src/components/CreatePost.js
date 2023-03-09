import React from 'react';
import {Form, Button, Input, notification} from 'antd'
import axios from 'axios';
const CreatePost = (props) => {
    const { TextArea } = Input;
    const createPost = async (values) => {
         // notification 
        notification.open({
            message: 'The post has successfully been created !',
            duration: 5,
            placement: "bottomLeft",
            className: 'notification-create'
            
        });
        // manipulate the data that they can be use for the database
        values = {

            userId: 2,
            title: values.title,
            body: values.body,

        }
        try {
            const res = await axios.post('http://localhost:3000/posts', values)
            .then(response => {
                props.setcounter(props.counter+1); // event encoutner to make the database call and get the new data
               
                // props.setdata({...props.data,...response.data});
                // props.setfilter({...props.filter, ...response.data});
            })
        } catch (error) {
            alert(error)
        }
       
    
        props.setmodal(false)
  
      }
    return (
        <Form layout='vertical' onFinish={createPost}>
            <Form.Item label='Title' name='title' required={true}>
                <Input  required={true} placeholder='type a title for your post...'>

                </Input>
            </Form.Item>
            <Form.Item label='Body' name='body' required={true}>
                <TextArea  required={true} placeholder='type your post...' rows={5}>

                </TextArea>
            </Form.Item>
            <Button htmlType='submit' type='primary'>
                create
            </Button>
        </Form>
    );
};

export default CreatePost;
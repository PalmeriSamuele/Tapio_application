import React from 'react';
import {Form, Button, Input} from 'antd'
import axios from 'axios';
const CreatePost = (props) => {
    const { TextArea } = Input;
    const createPost = (values) => {

        // manipulate the data that they can be use for the database
        values = {

            userId: 1,
            title: values.title,
            body: values.body,

        }
        axios.post('http://localhost:3000/posts', values)
        .then(response => {
            props.setcounter(props.counter+1); // event encoutner to make the database call and get the new data
            alert('Saved !')
            // props.setdata({...props.data,...response.data});
            // props.setfilter({...props.filter, ...response.data});
        })
        .catch(error => {
            console.log(error);
        });
        console.log(values);
  
      }
    return (
        <Form layout='vertical' onFinish={createPost}>
            <Form.Item label='Title' name='title' required={true}>
                <Input placeholder='type a title for your post...'>

                </Input>
            </Form.Item>
            <Form.Item label='Body' name='body' required={true}>
                <TextArea placeholder='type your post...' rows={5}>

                </TextArea>
            </Form.Item>
            <Button htmlType='submit' type='primary'>
                create
            </Button>
        </Form>
    );
};

export default CreatePost;
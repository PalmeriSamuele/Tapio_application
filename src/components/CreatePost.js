import React from 'react';
import {Form, Button, Input, notification} from 'antd'
import axios from 'axios';
const CreatePost = (props) => {
    const { TextArea } = Input;

    // fomnction qui va creer un commentaire 
    const createPost = async (values) => {
         // notification 
        notification.open({
            message: 'Votre nouveau commentaire a été publié !',
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
            <Form.Item label='Titre' name='title' required={true}>
                <Input  required={true} placeholder='Ecris un titre ici ...'>

                </Input>
            </Form.Item>
            <Form.Item label='Commentaire' name='body' required={true}>
                <TextArea  required={true} placeholder='Ecris ton commentaire ici...' rows={5}>

                </TextArea>
            </Form.Item>
            <Button htmlType='submit' className='post-form-btn'>
                poster
            </Button>
        </Form>
    );
};

export default CreatePost;
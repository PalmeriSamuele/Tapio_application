import React from 'react';
import CreatePost from './CreatePost';
import Modal from 'antd/es/modal/Modal';
import { useState } from 'react';
const ModalForm = (props) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    
    const handleCancel = () => {
        setOpen(false);
    };
    
    return (
        <>
            <button className='createevent-btn rounded' id='create-btn' onClick={showModal}>
                create a post
            </button>
            <Modal
                title="Create a new post"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}  
                footer={null}
            >
            <CreatePost counter={props.counter} setcounter={props.setcounter} />
    
            </Modal>
        </>
    );
};

export default ModalForm;
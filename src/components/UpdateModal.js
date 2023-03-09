import React from 'react';
import UpdatePost from './UpdatePost';
import Modal from 'antd/es/modal/Modal';
import { useState } from 'react';


const UpdateModal = (props) => {
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
            <button  id='update-post-btn' onClick={showModal}>
                update
            </button>
            <Modal
                title="Create a new post"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}  
                footer={null}
            >
            <UpdatePost counter={props.counter} setcounter={props.setcounter} post={props.post}/>
    
            </Modal>
        </>
    );
};

export default UpdateModal;
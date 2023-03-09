import React from 'react';
import UpdatePost from './UpdatePost';
import Modal from 'antd/es/modal/Modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


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
            <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <Modal
                title="Create a new post"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}  
                footer={null}
            >
            <UpdatePost setmodal={setOpen} counter={props.counter} setcounter={props.setcounter} post={props.post}/>
    
            </Modal>
        </>
    );
};

export default UpdateModal;
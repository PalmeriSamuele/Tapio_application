import React from 'react';
import CreatePost from './CreatePost';
import Modal from 'antd/es/modal/Modal';
import { Button } from 'antd';
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

            <Button id='create-btn' type="primary" ghost onClick={showModal}>
                écrire un post
            </Button>

            <Modal
                title="Crée un nouveau commentaire"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}  
                footer={null}
            >
            <CreatePost setmodal={setOpen} counter={props.counter} setcounter={props.setcounter} />
    
            </Modal>
        </>
    );
};

export default ModalForm;
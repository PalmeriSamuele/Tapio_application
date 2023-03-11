import React from 'react';
import UpdatePost from './UpdatePost';
import Modal from 'antd/es/modal/Modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { notification } from 'antd';


const UpdateModal = (props) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // make sure that its the correct user that want acces his datas
    // if not we display the notification and we do not open the modal
    const showModal = () => {
        props.post.userId == 2 ?  setOpen(true): notification.open({
            message: 'Vous ne pouvez pas modifier ce commentaire !',
            duration: 4,
            placement: "topRight",
            className: 'notification-delete-error'
        });
    };
    
    const handleCancel = () => {
        props.post.userId == 2 ?  setOpen(false) : setOpen(true);
    };
    
    return (
        <>
            <button  id='update-post-btn' onClick={showModal} title="modifier">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <Modal
                title="Modifie ton commentaire"
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
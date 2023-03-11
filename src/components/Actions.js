import React from 'react';
import ModalForm from './ModalForm';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaFacebook from '../Svg/facebook.svg'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SwitchMode from './SwitchMode';

const Actions = (props) => {
    const {Search} = Input
    const searchFunction = (e) => {
        console.log();
        const searchInput = e.target.value;
        props.setSearchInput(searchInput);
    }
    

    
    return (
        <div id='actions-section'>
            <Input placeholder='Rechercher un commentaire ...' onChange={(e) => searchFunction(e)} allowClear  />
            {/* <select name="" id="sort-btn" onChange={(e) => sortFunction(e)}>
                <option value="">All</option>
                <option value="true">Completed</option>
                <option value="false">To Do</option>
            </select> */}
            <SwitchMode  />
            <div id='footer-header'>
                <div className='social-box'>
                    <a href="https://www.facebook.com/TapioView/" target='_blank'> <FontAwesomeIcon className='social-icon' icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/tapioview/" target='_blank'><FontAwesomeIcon className='social-icon' icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/samuele-palmeri-a50809206/" target='_blank'> <FontAwesomeIcon className='social-icon' icon={faLinkedin} /></a>
                </div>
                
                <ModalForm counter={props.eventCounter} setcounter={props.setEventCounter}/>
            </div>
          
        </div>
    );
};

export default Actions;
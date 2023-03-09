import React from 'react';
import ModalForm from './ModalForm';
import { Input } from 'antd';
const Actions = (props) => {
    const {Search} = Input
    const searchFunction = (e) => {
        console.log();
        const searchInput = e.target.value;
        props.setSearchInput(searchInput);
    }
    

    
    return (
        <div id='actions-section'>
            <Search placeholder='Search a post...' onChange={(e) => searchFunction(e)} loading />
            {/* <select name="" id="sort-btn" onChange={(e) => sortFunction(e)}>
                <option value="">All</option>
                <option value="true">Completed</option>
                <option value="false">To Do</option>
            </select> */}

            <ModalForm counter={props.eventCounter} setcounter={props.setEventCounter}/>
        </div>
    );
};

export default Actions;
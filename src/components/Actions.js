import React from 'react';
import ModalForm from './ModalForm';

const Actions = (props) => {
    const searchFunction = (e) => {
        console.log();
        const searchInput = e.target.value;
        props.setSearchInput(searchInput);
    }
    

    
    return (
        <div id='actions-section'>
            <input type="text" name="" id="searchbar" placeholder='Search a post...' onChange={(e) => searchFunction(e)}/>
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
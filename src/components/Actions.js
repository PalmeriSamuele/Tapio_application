import React from 'react';

const Actions = () => {
    return (
        <div id='actions-section'>
            <input type="text" name="" id="searchbar" placeholder='Search a task...'/>
            <select name="" id="sort-btn">
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">To Do</option>
            </select>
            <button id='create-btn'>Create</button>
        </div>
    );
};

export default Actions;
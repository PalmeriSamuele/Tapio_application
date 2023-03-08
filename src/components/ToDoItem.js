import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
const ToDoItem = (props) => {

    const [isChecked, setIsChecked] = useState(props.todo.completed);

    const completedTask  = async (e)=> {
        console.log(e.target);
        setIsChecked(!isChecked)
        const todo = {
            "userId": props.todo.userId,
            "id": props.todo.id,
            "title": props.todo.title,
            "completed": !isChecked
        }
        const res = await axios.put(`http://localhost:3000/todos/${props.todo.id}`, todo);
    }

    const deleteToDo = async () => {
        const id = props.todo.id
        const res = await axios.delete(`http://localhost:3000/todos/${id}`)
        .then(response => {
          props.setEventCounter(props.eventCounter+1);
          alert('Task deleted');
        })
        .catch(error => {
          console.log(error);
        });
    
      }

        return (
            <div id='todo-item'>
                <div className='status'>
               
              
                    <input type="checkbox" name="" id="" checked={ isChecked ? 'checked' : ''} onChange={completedTask}/>
            
                </div>
                <div>
                    <p>{props.todo.title}</p>
                </div>
                <div >
                    <button className='delete-btn'>
                    <FontAwesomeIcon icon={faTrash} onClick={deleteToDo} />
                    </button>
                </div>
            </div>
        );
    

};

export default ToDoItem;
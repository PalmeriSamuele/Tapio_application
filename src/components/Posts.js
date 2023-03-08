import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

import {users} from '../Users/users'

const Posts = (props) => {
    const [profile, setProfile] = [users[props.post.userId-1]]
    console.log(profile);
    const truncate = function(str) {
        return str.length > 60 ? str.substring(0, 59) + "..." : str;
    }

    const deletePost = async () => {
        const id = props.post.id
        const res = await axios.delete(`http://localhost:3000/posts/${id}`)
        .then(response => {
          props.setEventCounter(props.eventCounter+1);
          alert('Post deleted');
        })
        .catch(error => {
          console.log(error);
        });
    
      }

        return (
            <div id='post-item'>
                <div id='profile-div'>
                    <img src={profile.img} className='profile-picture' alt="" />
                    <h2 id='profile-name'>{profile.name}</h2>
                </div>
            <div>
                <div className='post-title'>
                        
                        <p className='post-title'>{truncate(props.post.title)}</p>
                    </div>
                    <div className='post-text'>
                        
                        <p className='post-text'>{truncate(props.post.body)}</p>
                    </div>
                </div>
  
                <div className='delete-box' >
                    <button className='delete-btn'>
                    <FontAwesomeIcon icon={faXmark} onClick={deletePost} />
                    </button>
                </div>
            </div>
        );
    

};

export default Posts;
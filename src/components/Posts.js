import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Alert, notification } from "antd";

import { users } from "../Users/users";
import UpdateModal from "./UpdateModal";

const Posts = (props) => {
  const [profile, setProfile] = [users[props.post.userId - 1]];
  const truncate = function (str) {
    return str.length > 60 ? str.substring(0, 59) + "..." : str;
  };

  const deletePost = async (e) => {
    console.log(props.post.userId)
    if(props.post.userId == 2){
        
        notification.open({
            message: 'Le commentaire a été supprimé !',
            duration: 4,
            placement: "topRight",
            className: 'notification-delete'
          });
        const id = props.post.id;
        const res = await axios
          .delete(`http://localhost:3000/posts/${id}`)
          .then((response) => {
            props.setEventCounter(props.eventCounter + 1);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    else{
        
        notification.open({
            message: 'Ce commentaire ne vous appartient pas !',
            duration: 4,
            placement: "topRight",
            className: 'notification-delete-error'
          });

    }

  };

  return (
    <div id="post-item">
      <div id="profile-div">
        <img src={profile.img} className="profile-picture" alt="" />
        <h2 id="profile-name">{profile.name}</h2>
      </div>
      <div className="post-info">
        <div >
          <p className="post-title">{truncate(props.post.title)}</p>
        </div>
        <div className="post-text">
          <p className="post-text">{truncate(props.post.body)}</p>
        </div>
        <UpdateModal post={props.post} counter={props.eventCounter} setcounter={props.setEventCounter} />
      </div>

      <div className="delete-box">
        <button className="delete-btn" title="supprimer">
          <FontAwesomeIcon icon={faXmark} onClick={(e) => deletePost(e)} />
        </button>
      </div>
    </div>
  );
};

export default Posts;

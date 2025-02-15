import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-profile">
        <div className="comment-profile-img">
          <img
            src="https://i.postimg.cc/SsCPqZt7/default-avatar-photo-placeholder-profile-icon-vector-21666259.avif"
            alt="Profile"
          />
        </div>
        <div className="comment-profile-info">{comment.username}</div>
      </div>
      <div className="comment-text">{comment.text}</div>
    </div>
  );
};

export default Comment;

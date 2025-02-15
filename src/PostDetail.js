import React, { useState } from "react";
import Comment from "./Comment";
import "./PostDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PostDetail = ({ post, onBack, loggedInUsername }) => {
  const [comments, setComments] = useState(post.comments);

  const addComment = (text) => {
    const username = loggedInUsername || "Anonymous";
    const newComment = {
      id: comments.length + 1,
      text,
      username,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="post-detail-container">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        Back to Forum
      </button>
      <div className="post-detail">
        <div className="post-detail-sec-1">
          <div className="post-detail-profile-img">
            <img
              src="https://i.postimg.cc/SsCPqZt7/default-avatar-photo-placeholder-profile-icon-vector-21666259.avif"
              alt="Profile"
            />
          </div>
          <div className="post-detail-profile-info">
            <h5 className="mb-1 text-danger">{post.title}</h5>
            <div className="topics">
              {post.topics.map((topic, index) => (
                <span key={index} className="badge bg-danger me-1">
                  {topic}
                </span>
              ))}
            </div>
            <p>Asked by: {post.username}</p>
          </div>
        </div>
        <div className="post-detail-sec-2">
          <p>{post.description}</p>
        </div>
      </div>
      <div className="comment-form">
        <CommentForm addComment={addComment} />
        <div className="comment-form-view-comments">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(text);
    setText("");
  };

  return (
    <>
      <form className="comment-form-add-comment" onSubmit={handleSubmit}>
        <div className="comment-form-text-field">
          <div className="comment-form-user-profile-img">
            <img
              src="https://i.postimg.cc/SsCPqZt7/default-avatar-photo-placeholder-profile-icon-vector-21666259.avif"
              alt="Profile"
            />
          </div>
          <input
            type="text"
            placeholder="Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="comment-form-action">
          <button type="submit">Add Comment</button>
        </div>
      </form>
    </>
  );
};

export default PostDetail;

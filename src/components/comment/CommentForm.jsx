import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const CommentForm = ({currentId}) => {

  const {addNewComment} = useBlogCalls();
  const {displayName} = useSelector((state) => state.authReducer);

  const initialState = {
    currentId:currentId,
    title:"",
    message:"",
    date: new Date().toLocaleDateString(),
    commenter:displayName ? displayName : null,
  };

  const[commentForm, setCommentForm] = useState(initialState);
  

  const handleSubmit =(e)=>{
      e.preventDefault();
      addNewComment(commentForm);
    }
    


  return (
    <div className="blog-comment-form">
      <div className="row margin-top-20">
        <div className="col-md-12">
          <div className="pull-left">
            <h3>Leave a Comment</h3>
          </div>
        </div>
      </div>
      <div className="row margin-top-20">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <div className="row margin-bottom-20">
              <div className="col-md-7 col-md-offset-0">
                <input
                value={commentForm.title}
                onChange={(e) => setCommentForm({...commentForm, title:e.target.value})}
                className="form-control" type="text" required/>
              </div>
            </div>
      
            <label>Message</label>
            <div className="row margin-bottom-20">
              <div className="col-md-11 col-md-offset-0">
                <textarea
                value={commentForm.message}
                onChange={(e) => setCommentForm({...commentForm, message:e.target.value})}
                className="form-control" required />
              </div>
            </div>
            <p>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;

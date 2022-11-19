import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
const NewBlog = () => {

  const {addNewBlog} =  useBlogCalls();
  const {displayName} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();


  const year = new Date().getFullYear();
  const month = new Date().getMonth()+1;
  const day = new Date().getDate();
  const date = `${year}-${month}-${day}`;

  const initialState = {
    title:"",
    imgUrl:"",
    content:"",
    comments:{},
    category:"",
    date:date,
    author: displayName ? displayName : "admin"
  }
  const[singleBlogData, setSingleBlogData] = useState(initialState);
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    addNewBlog(singleBlogData);
    setSingleBlogData(initialState);
    navigate("/");
  }


  return (
    <div className="row">
      <div className="col-md-4 offset-4">
        <h2 className="text-center">--NEW BLOG--</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={singleBlogData.title}
              onChange={(e) =>setSingleBlogData({...singleBlogData, title:e.target.value})}
              className="form-control"
              id="floatingInput"
              placeholder="title"
            />
            <label htmlFor="floatingInput">Title</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={singleBlogData.imgUrl}
              onChange={(e) => setSingleBlogData({...singleBlogData, imgUrl:e.target.value})}
              className="form-control"
              id="floatingInput"
              placeholder="imgUrl"
            />
            <label htmlFor="floatingInput">Image URL</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={singleBlogData.category}
              onChange={(e) => setSingleBlogData({...singleBlogData, category:e.target.value})}
              className="form-control"
              id="floatingInput"
              placeholder="category"
            />
            <label htmlFor="floatingInput">Category ex: Css, React</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
            style={{height:"250px"}}
            value={singleBlogData.content}
            onChange={(e) => setSingleBlogData({...singleBlogData, content:e.target.value})}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            />
            <label htmlFor="floatingTextarea">Content</label>
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;

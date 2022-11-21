import React, { useEffect } from 'react';
import CommentForm from '../components/comment/CommentForm';
import profile87 from "../assets/images/avatar1.jpg";
import RecentPosts from '../components/recent-posts/RecentPosts';
import { Link, useLocation, useParams } from 'react-router-dom';
import useBlogCalls from '../hooks/useBlogCalls';
import { useSelector } from 'react-redux';

const Details = () => {

  const {id} = useParams();
  const {state:post} = useLocation();
  const {getPost} = useBlogCalls();
  const {currentPost} = useSelector((state) =>state.blogReducer);
  const date = post.date;
  const splittedDate = date?.split("-");
            const months = ["JAN","FEB","MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            let formattedMonth ="";  
            let formattedDay ="";  
            if (splittedDate) {
                formattedMonth = months[splittedDate[1]-1];
                formattedDay = splittedDate[2];
            }
  useEffect(() => {
  if (id) {
    getPost(id);
  }
  }, [id]);

  return (
    <div id="body_bg">
    <div className="primary-container-group">
      <div className="primary-container">
        
        <div className="container pt-4">
          {/* === END HEADER === */}
          {/* === BEGIN CONTENT === */}
          <div className="row margin-vert-30">
            {/* Main Column */}
            <div className="col-md-9">
              <div className="blog-post">
                <div className="blog-item-header">
                  <div className="blog-post-date pull-left">
                    <span className="day">{formattedDay}</span>
                    <span className="month">{formattedMonth}</span>
                  </div>
                  <h2>
                    <p>
                      {currentPost?.title}
                    </p>
                  </h2>
                </div>
                <div className="blog-item">
                  <div className="clearfix" />
                  <div className="blog-post-body row margin-top-15">
                    <div className="col-md-5">
                      <img className="pull-left" src={currentPost?.imgUrl} alt="image1" />
                    </div>
                    
                    <div className="col-md-12">
                      <p>
                       {currentPost?.content}</p>
                    </div>
                  </div>
                  <div className="blog-item-footer">
                    {/* About the Author */}
                    <div className="blog-author panel panel-default margin-bottom-30">
                      <div className="panel-heading">
                        <h3>About the Author</h3>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-2">
                            <img className="pull-left" src={profile87} alt="image1" />
                          </div>
                          <div className="col-md-10">
                            <label>{currentPost?.author}</label>
                            <p>Lorem ipsum dolor sit amet, in pri offendit ocurreret. Vix sumo ferri an. pfs adodio fugit delenit ut qui. Omittam suscipiantur ex vel,ex audiam intellegat gfIn labitur discere eos, nam an feugiat
                              voluptua.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End About the Author */}
                    {/* Comments */}
                    <div className="blog-recent-comments panel panel-default margin-bottom-30">
                      <div className="panel-heading">
                        <h3>Comments</h3>
                      </div>
                      <ul className="list-group">
                        {
                         currentPost?.comments &&                            
                        
                        Object.values(currentPost.comments)?.map((comment,i) =>{
                          return(
                            <li key={i} className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 profile-thumb">
                              <Link to="">
                                <img className="media-object" 
                                src={profile87} alt="" />
                                <p>{comment?.commenter}</p>
                              </Link>
                            </div>
                            <div className="col-md-10">
                              <h4>{comment?.title}</h4>
                              <p>{comment?.message}</p>
                              <span className="date">
                                <i className="fa fa-clock-o" />{comment?.date}</span>
                            </div>
                          </div>
                        </li>
                          )
                        })}
                            
                        
                        {/* Comment Form */}
                        <li className="list-group-item">
                          <CommentForm currentId={id}/>
                        </li>
                        {/* End Comment Form */}
                      </ul>
                    </div>
                    {/* End Comments */}
                  </div>
                </div>
              </div>
              {/* End Blog Post */}
            </div>
            {/* End Main Column */}
            {/* Side Column */}
            <div className="col-md-3 mt-3">
             <RecentPosts/>
              {/* End Side Column */}
            </div>
          </div>
          {/* === END CONTENT === */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details
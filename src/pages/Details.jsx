import React, { useEffect } from 'react';
import CommentForm from '../components/comment/CommentForm';
import image1 from "../assets/images/image1.jpg";
import profile87 from "../assets/images/87.jpg";
import profile37 from "../assets/images/37.jpg";
import RecentPosts from '../components/recent-posts/RecentPosts';
import { Link, useParams } from 'react-router-dom';
import useBlogCalls from '../hooks/useBlogCalls';
import { useSelector } from 'react-redux';

const Details = () => {

  const {id} = useParams();
  const {getPost} = useBlogCalls();
  const {currentPost} = useSelector((state) =>state.blogReducer);

  useEffect(() => {
   getPost(id);
  }, []);
  
  console.log(id);

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
                    <span className="day">14</span>
                    <span className="month">Dec</span>
                  </div>
                  <h2>
                    <Link to="">
                      Just a Sample Blog Bost
                    </Link>
                  </h2>
                </div>
                <div className="blog-item">
                  <div className="clearfix" />
                  <div className="blog-post-body row margin-top-15">
                    <div className="col-md-5">
                      <img className="pull-left" src={image1} alt="image1" />
                    </div>
                    
                    <div className="col-md-12">
                      <p>
                       content</p>
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
                            <label>John Doe</label>
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
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2 profile-thumb">
                              <Link to="">
                                <img className="media-object" src={profile37} alt="" />
                              </Link>
                            </div>
                            <div className="col-md-10">
                              <h4>Thank you!</h4>
                              <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                              <span className="date">
                                <i className="fa fa-clock-o" />10 May 2013</span>
                            </div>
                          </div>
                        </li>
                        {/* Comment Form */}
                        <li className="list-group-item">
                          <CommentForm/>
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
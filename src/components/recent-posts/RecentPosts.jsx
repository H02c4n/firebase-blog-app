import React from 'react'
import { Link } from 'react-router-dom';

import thumb1 from "../../assets/images/avatar2.jpg";

const RecentPosts = () => {
  return (
    <div className="recent-posts">
                    <h3>Recent Posts</h3>
                    <ul className="posts-list margin-top-10">
                      <li>
                        <div className="recent-post">
                          <Link to="">
                            <img className="pull-left" style={{width:"75px"}} src={thumb1}  alt="thumb1" />
                          </Link>
                          <Link to="" className="posts-list-title">Sidebar post example</Link>
                          <br />
                          <span className="recent-post-date">
                            July 30, 2013
                          </span>
                        </div>
                        <div className="clearfix" />
                      </li>
                      
                    </ul>
                  </div>
  )
}

export default RecentPosts
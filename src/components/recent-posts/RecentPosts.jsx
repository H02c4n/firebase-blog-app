import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import useBlogCalls from '../../hooks/useBlogCalls';
import thumb1 from "../../assets/images/avatar2.jpg";
import { useSelector } from 'react-redux';

const RecentPosts = () => {

const { getLastFivePosts } = useBlogCalls();
const {lastFivePosts} = useSelector((state) => state.blogReducer);

console.log(lastFivePosts);


useEffect(() => {
  getLastFivePosts();
}, [])


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
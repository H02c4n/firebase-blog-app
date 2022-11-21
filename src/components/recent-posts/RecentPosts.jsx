import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useBlogCalls from '../../hooks/useBlogCalls';
import { useSelector } from 'react-redux';

const RecentPosts = () => {

  const navigate = useNavigate();
const { getLastFivePosts } = useBlogCalls();
const {lastFivePosts} = useSelector((state) => state.blogReducer);

//console.log(lastFivePosts);


useEffect(() => {
  getLastFivePosts();
}, [])


  return (
    <div className="recent-posts">
                    <h3>Recent Posts</h3>
                    <ul className="posts-list margin-top-10">
                      {lastFivePosts?.map((post, i) =>{
                        return(
                          <li key={i}>
                        <div className="recent-post">
                          <p style={{
                            textAlign:"left",
                            fontSize:"2rem",
                            display:"inline-block",
                            border:"2px solid gray",
                            borderRadius:"50%",
                            marginRight:"10px"
                          }}>{post?.author[0]}</p>
                          {/* <Link to="">
                            <img className="pull-left" style={{width:"75px"}} src={thumb1}  alt="thumb1" />
                          </Link> */}
                          <a role="button" onClick={()=> navigate(`details/${post?.id}`, {state:post})} className="posts-list-title">{post?.title}</a>
                          <br />
                          <span className="recent-post-date">
                            {post.date}
                          </span>
                        </div>
                        <div className="clearfix" />
                      </li>
                        )
                      })}
                      
                      
                    </ul>
                  </div>
  )
}

export default RecentPosts
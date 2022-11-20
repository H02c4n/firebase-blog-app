import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useBlogCalls from '../../hooks/useBlogCalls';
import {AiOutlineComment, AiOutlineLike} from "react-icons/ai";

const BlogCard = () => {


    const {getPosts, addLike, removeLike} = useBlogCalls();
    const navigate = useNavigate();
   
    useEffect(() => {
      getPosts();
    }, [])

     const {blogList} = useSelector((state)=>state.blogReducer);
     const {currentUser} = useSelector((state) => state.authReducer);
     const currentUserEmail = currentUser.email;



  return (
    <div>
        {blogList?.map(post =>{
            const{id, title, content, imgUrl, date, like, comments} = post;
          
            const l =Object.keys(like).length-1;
            const willRemove = Object.keys(like)[l];

            const splittedDate = date?.split("-");
            const months = ["JAN","FEB","MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            let formattedMonth ="";  
            let formattedDay ="";  
            if (splittedDate) {
                formattedMonth = months[splittedDate[1]-1];
                formattedDay = splittedDate[2];
            }
            return(
                <div key={id} className="blog-post">
                    {/* Blog Item Header */}
                    <div className="blog-item-header">
                      {/* Date */}
                      <div className="blog-post-date pull-left" style={{width:"3rem"}}>

                        <span className="day">{formattedDay}</span>
                        <span className="month">{formattedMonth}</span>
                        <span>
                        
                        <AiOutlineComment style={{fontSize:"1.5rem", paddingTop:"3px"}}
                        className="mt-2" role="button"/>
                        
                        <span className='text-white bg-secondary border rounded-pill'>{comments ? Object.keys(comments)?.length : 0}</span>
                        </span>
                        <span>
                          
                          <AiOutlineLike
                          onClick={() => {
                            if (Object.values(like).includes(currentUserEmail)) {
                              removeLike(id, willRemove);
                            }else{
                            addLike(id, currentUserEmail);
                            }
                          }}
                             
                          style={{fontSize:"1.5rem", paddingTop:"3px"}} role="button" />
                        
                        <span className='text-white bg-secondary border rounded-pill'>{Object.values(like).length}</span>
                        </span>
                      </div>
                      {/* End Date */}
                      {/* Title */}
                      <h2>
                        <Link to="">
                          {title}  </Link>
                      </h2>
                      
                      {/* End Title */}
                    </div>
                    {/* End Blog Item Header */}
                    {/* Blog Item Body */}
                    <div className="blog row">
                      <div className="clearfix" />
                      <div className="blog-post-body row margin-top-15">
                        <div className="col-md-6">
                          <img className="pull-left" src={imgUrl} alt="thumb1" />
                        </div>
                        <div className="col-md-12">
                          <p style={{height:"56px", overflow:"hidden"}}>{content}</p>
                          <button onClick={()=> navigate(`details/${id}`, {state:post})} className='btn btn-primary'>Read More</button>
                        </div>
                      </div>
                      <div className="blog-item-footer">
                        <div className="row">
                          <div className="col-md-12">
                            <hr />
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    {/* End Blog Item Body */}
                  </div>
            )
        })}
        
    </div>
  )
}

export default BlogCard
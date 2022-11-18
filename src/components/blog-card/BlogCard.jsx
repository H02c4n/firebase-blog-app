import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useBlogCalls from '../../hooks/useBlogCalls';

const BlogCard = () => {


    const {getPosts} = useBlogCalls();
    const navigate = useNavigate();
   
    useEffect(() => {
      getPosts();
    }, [])

     const {blogList} = useSelector((state)=>state.blogReducer);
     //console.log(blogList);



  return (
    <div>
        {blogList?.map(post =>{
            const{id, title, content, imgUrl, date} = post;
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
                      <div className="blog-post-date pull-left">

                        <span className="day">{formattedDay}</span>
                        <span className="month">{formattedMonth}</span>
                      </div>
                      {/* End Date */}
                      {/* Title */}
                      <h2>
                        <Link to="">
                          {title}</Link>
                      </h2>
                      {/* End Title */}
                    </div>
                    {/* End Blog Item Header */}
                    {/* Blog Item Body */}
                    <div className="blog row">
                      <div className="clearfix" />
                      <div className="blog-post-body row margin-top-15">
                        <div className="col-md-5">
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
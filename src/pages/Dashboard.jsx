import React from 'react'
import { useSelector } from 'react-redux'
import BlogCategories from '../components/blog-categories/BlogCategories';
import RecentPosts from '../components/recent-posts/RecentPosts';
import BlogCard from '../components/blog-card/BlogCard';


const Dashboard = () => {

  const {currentUser} = useSelector((state)=> state.authReducer);

  return (
    <div id="body_bg">
      {currentUser}
        <div id="container_header" className="container">
          
        </div>
        <div className="primary-container-group">
          <div className="primary-container pt-4">
  
            <div className="container">
              {/* === END HEADER === */}
              {/* === BEGIN CONTENT === */}
              <div className="row margin-vert-30">
                {/* Main Column */}
                <div className="col-md-9">
                  {/* Blog Post */}

                  <BlogCard/>
                  
                  {/* End Blog Item */}
                
                </div>
                {/* End Main Column */}
              
                <div className="col-md-3 mt-3">
                  
                 <BlogCategories/>

                  <RecentPosts/>
                </div>
              </div>
            </div>
            
          
          </div>
        </div>
      </div>
  )
}

export default Dashboard
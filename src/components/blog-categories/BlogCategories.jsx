import React from 'react'
import { useSelector } from 'react-redux'

const BlogCategories = () => {

  const {} = useSelector((state) => state.authReducer);


  return (
    <div className="blog-tags">
    <h3>Categories</h3>
    <ul className="blog-tags">
      <li>
        <p href="#" className="blog-tag">HTML</p>
      </li>
    </ul>
  </div>
  )
}

export default BlogCategories
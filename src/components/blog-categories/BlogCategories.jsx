import React from 'react'
import { useSelector } from 'react-redux'

const BlogCategories = () => {

  const {blogList} = useSelector((state) => state.blogReducer);
  
  const categories = [];

  for (let i = 0; i < blogList.length; i++) {
    categories.push(blogList[i].category);
    
  }


  return (
    <div className="blog-tags">
    <h3>Categories</h3>
    <ul className="blog-tags">
      {categories?.map(category =>{
        return(
          <li>
        <p href="#" className="blog-tag">{category.toUpperCase()}</p>
      </li>
        )
      })}
      
    </ul>
  </div>
  )
}

export default BlogCategories
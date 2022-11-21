import React from 'react'
import { useSelector } from 'react-redux'
import useBlogCalls from "../../hooks/useBlogCalls";

const BlogCategories = () => {
  const {updateCurrentCategory} = useBlogCalls();

  const {blogList} = useSelector((state) => state.blogReducer);
  
  const categories = [];

  for (let i = 0; i < blogList.length; i++) {
    if (!categories.includes(blogList[i].category)) {
      categories.push(blogList[i].category);
    }
  }


  return (
    <div className="blog-tags">
    <h3>Categories</h3>
    <ul className="blog-tags">
      {categories?.map((category, i) =>{
        return(
          <li key={i}>
        <p onClick={() => updateCurrentCategory(category)} role="button" className="blog-tag">{category.toUpperCase()}</p>
      </li>
        )
      })}
      
    </ul>
  </div>
  )
}

export default BlogCategories
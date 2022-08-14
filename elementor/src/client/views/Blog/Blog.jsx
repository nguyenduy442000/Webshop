import React from 'react'
import './blog.scss';
import {blog} from "../../../data";
const Blog = () => {
  return (
    <div >
    <div className="c-blog">
    <ul className="c-blog__nav">
    <li>All</li>
    <li>Architecture</li>
    <li>Art & design</li>
    <li>Events</li>
    <li>Fashion</li>
    </ul>
    <div className="c-blog__container">
   {
    blog.map((item) => (

      <div className="c-blog__container-item" key={item.id}>
      <div className="c-blog__container-backgroundImage" style={{backgroundImage:`url(${item.img})`}}>
       <div className="overlay"></div>
      </div>
      <div className="c-blog__container-content">
      <h1>{item.title}</h1>
      <p>{item.category}</p>
      <div><span>Read story</span></div>
      </div>
      </div>
    )
    
    )
   }
   
    </div>
    </div>
    </div>
  )
}

export default Blog
import React from 'react';
import {Link} from "react-router-dom";

const BlogList = ({blog}) => {
    return (
            <li key={blog.id} >
                {blog.title} <Link to={'/blog-details/'+blog.id} className="btn btn-info"> Details</Link> <Link to={'/edit-blog/'+blog.id} className="btn btn-info"> Edit</Link>
            </li>
    )
}

export default BlogList

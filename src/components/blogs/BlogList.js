import React from 'react';
import {Link} from "react-router-dom";

const BlogList = ({blog}) => {
    return (
        <>
            <li key={blog.id} >
                {blog.title} <Link to={'/blog-details/'+blog.id} className="btn btn-info"> Details</Link>
            </li>
        </>
    )
}

export default BlogList

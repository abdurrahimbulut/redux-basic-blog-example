import React from 'react'
import BlogList from './BlogList'
import { connect } from 'react-redux'


const Blogs = ({blogs}) => {
    return (
        <div>
            {
                blogs.map(blog => (
                   
                        <BlogList key={blog.id} blog={blog}  />
                    
                ))
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(
    mapStateToProps
) (Blogs);

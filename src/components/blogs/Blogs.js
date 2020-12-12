import React from 'react'
import BlogList from './BlogList'
import { connect } from 'react-redux'


const Blogs = ({blogs}) => {
    return (
        <div>
            {
                blogs.map(blog => (
                    <ul>
                        <BlogList key={blog.id} blog={blog}  />
                    </ul>
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

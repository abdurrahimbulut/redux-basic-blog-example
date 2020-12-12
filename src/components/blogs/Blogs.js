import React from 'react'
import BlogList from './BlogList'
import { connect } from 'react-redux'


const Blogs = ({blogs}) => {
    return (
        <div>
            {console.log(blogs)}
            {
                blogs.map(blog => (
                    <ul>
                        <BlogList blog={blog}  />
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

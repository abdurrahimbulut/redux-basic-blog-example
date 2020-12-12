import React from 'react'
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";



const BlogDetails = ({blogDetails}) => {
    console.log(blogDetails);
    return (
        <div>
            <h2>
                {blogDetails.title}
            </h2>
            <p>
                {blogDetails.description}
            </p>
            <p>
                {blogDetails.dateAdded}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      blogDetails: (state.blogs.filter(({id}) => id === useParams().id )).shift()
    }
}


export default connect(
   mapStateToProps
)(BlogDetails)


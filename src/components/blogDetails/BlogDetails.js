import React from 'react'
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";



const BlogDetails = ({blogDetails}) => {
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

const mapStateToProps = (state,props) => {
    return {
      blogDetails: (state.blogs.filter(({id}) => id === props.match.params.id )).shift()
    }
}


export default connect(
   mapStateToProps
)(BlogDetails)


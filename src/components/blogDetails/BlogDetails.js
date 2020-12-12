import React from 'react'
import {useParams} from "react-router-dom";
import {getBlog} from "../../redux/actions/blog";
import {connect} from 'react-redux';


const BlogDetails = (props) => {
    let { id } = useParams();
    //console.log(getBlog(id));
    console.log(id);
    return (
        <div>
            
        </div>
    )
}



const mapDispatchToProps = { getBlog };
export default connect(
    mapDispatchToProps
)(BlogDetails)

//export default BlogDetails;
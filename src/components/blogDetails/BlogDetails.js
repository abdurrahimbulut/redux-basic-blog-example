import React from 'react'
import { useEffect,useState } from 'react';
import {connect} from 'react-redux';



const BlogDetails = ({blogDetails}) => {
    const [date,setDate] = useState("");
    useEffect(()=>{
        let d = new Date(blogDetails.dateAdded);
        setDate(d.toString());
    },[])
    return (
        <div>
            <h2>
                {blogDetails.title}
            </h2>
            <p>
                {blogDetails.description}
            </p>
            <p>
                {date}
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


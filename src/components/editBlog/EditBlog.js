import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import BlogForm from '../blogForm/BlogForm';
import {editBlog} from '../../redux/actions/blog';
import { useHistory } from "react-router-dom";


const EditBlog = (props) => {
    let history = useHistory();

    useEffect(() => {
        (!props.blogDetails ) && history.push('/');
    }, []);

    const setValues = ({title,description}) => {
        props.dispatch(editBlog(
            props.match.params.id
            ,{
                title,
                description
            }
        ));
        history.push('/');
    }


    return (
        <div>
            <h2>Edit Blog</h2>
            <BlogForm  setValues={setValues} title={props.blogDetails.title} description={props.blogDetails.description}  />)
        </div>
    )
}

const mapStateToProps = (state ,props ) => {
    return {
      blogDetails: state.blogs.filter(({id}) => id === props.match.params.id ).shift()
    }
}


export default connect(
    mapStateToProps
)(EditBlog)

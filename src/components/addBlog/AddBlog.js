import React from 'react';
import { connect } from 'react-redux';
import BlogForm from '../blogForm/BlogForm';
import {addBlog} from '../../redux/actions/blog';
import { useHistory } from "react-router-dom";

const AddBlog = (props) => {
    let history = useHistory();

    const setValues = ({title,description}) => {
        props.dispatch(addBlog(
            {
                title,
                description
            }
        ));
        history.push('/');
    }


    return (
        <div>
            <h2>New Blog</h2>
            <BlogForm setValues={setValues}  />
        </div>
    )
}

export default connect()(AddBlog);

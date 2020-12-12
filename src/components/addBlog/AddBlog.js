import React from 'react';
import { connect } from 'react-redux';
import BlogForm from '../blogForm/BlogForm';
import {addBlog} from '../../redux/actions/blog';

const AddBlog = (props) => {
    const setValues = ({title,description}) => {
        props.dispatch(addBlog(
            {
                title,
                description
            }
        ));
    }
    return (
        <div>
            <h2>deneme</h2>
            <BlogForm setValues={setValues}/>
        </div>
    )
}

export default connect()(AddBlog);

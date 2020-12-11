import {v4 as uuid } from 'uuid';
import actionType from './actionType';

export const addBlog = ({ title = '', description ='', dateAdded = Date.now}) => {
    return {
        type : actionType.ADD_BLOG,
        blog : {
            id : uuid(),
            title,
            description,
            dateAdded
        }
    }
}


export const removeBlog = ({ id }) => {
    return {
        type : actionType.REMOVE_BLOG,
        id
    }
}

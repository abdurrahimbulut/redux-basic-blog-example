import * as actionType from './actionType';
import {v4 as uuid } from 'uuid';


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

export const editBlog = ( id , updates ) => {
    return {
        type : actionType.REMOVE_BLOG,
        id,
        updates
    }
}


export const removeBlog = ({ id }) => {
    return {
        type : actionType.REMOVE_BLOG,
        id
    }
}

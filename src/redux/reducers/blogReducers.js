import * as actionType from '../actions/actionType';
import {v4 as uuid } from 'uuid';

const blogState = [
    {
        id : uuid(),
        title : "deneme blog",
        description : "deneme içerik",
        dateAdded : Date.now()
    }
];

const blogReducers = (state = blogState, action) => {
    switch (action.type) {
        case actionType.ADD_BLOG:
            return [...state,action.blog]
        case actionType.REMOVE_BLOG:
            return state.filter(({id}) => id !== action.id)
        case actionType.EDIT_BLOG:
            return state.map((blog) => {
                if (blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                }else{
                    return blog
                }
            })
        case actionType.GET_BLOG:
            return state.filter(({id}) => id === action.id)
        default:
            return state
    }   
}

export default blogReducers;
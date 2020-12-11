import * as actionType from '../actions/actionType';
const blogState = [];

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
        default:
            return state
    }   
}

export default blogReducers;
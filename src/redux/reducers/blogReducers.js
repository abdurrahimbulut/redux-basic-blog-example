const blogState = [];
import actionType from '../actions/actionType';

const blogReducers = (state = blogState, action) => {
    switch (action.type) {
        case actionType.ADD_BLOG:
                return [...state,action.blog]
            break;
        case actionType.REMOVE_BLOG:
                return state.filter(({id}) => id !== action.id)
            break;
        case actionType.EDIT_BLOG:
                return state.map((blog) => {
                   if (blog.id == action.id) {
                       return {
                            ...blog,
                            ...action.updates
                       }
                   }else{
                       return blog
                   }
                })
            break;
        default:
            state
            break;
    }   
}
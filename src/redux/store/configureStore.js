
import {createStore,combineReducers} from 'redux';
import blogReducers from '../reducers/blogReducers';

const configureStore = createStore(combineReducers({
    blog : blogReducers
}));

export default configureStore;

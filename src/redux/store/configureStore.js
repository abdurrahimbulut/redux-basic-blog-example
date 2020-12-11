import {createStore, combineReducers} from 'react-redux';
import blogReducers from '../reducers/blogReducers';

const configureStore = createStore(combineReducers({blogReducers}));

export default configureStore;

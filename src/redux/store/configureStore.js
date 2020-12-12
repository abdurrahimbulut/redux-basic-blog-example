
import {createStore,combineReducers} from 'redux';
import blogReducers from '../reducers/blogReducers';


export default ()=>{
    const configureStore = createStore(combineReducers({
        blogs : blogReducers    
    },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    return configureStore;
};

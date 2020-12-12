import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';



import * as BlogActions from "./redux/actions/blog";
import blogReducers from "./redux/reducers/blogReducers";


const store = configureStore();

console.log(store.getState());
store.dispatch(BlogActions.addBlog({ title :"deneme 2 title",description : "deskiripşinida gönderdim"}));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import Blogs from './components/blogs/Blogs';
import BlogDetails from './components/blogDetails/BlogDetails';
import AddBlog from './components/addBlog/AddBlog';
import EditBlog from './components/editBlog/EditBlog';
import Navbar from './components/navbar/';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path="/" render={(props) => <Blogs {...props}/>} />
            <Route path="/blog-details/:id"  render={(props) => <BlogDetails {...props}/>} />
            <Route path="/add-blog" render={(props) => <AddBlog {...props}/>} />
            <Route path="/edit-blog/:id" render={(props) => <EditBlog {...props}/>} />
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;

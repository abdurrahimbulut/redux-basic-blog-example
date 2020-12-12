import Blogs from './components/blogs/Blogs';
import BlogDetails from './components/blogDetails/BlogDetails';
import AddBlog from './components/addBlog/AddBlog';
import EditBlog from './components/editBlog/EditBlog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <Link to="/add-blog">Add Blog</Link>
              </li>
            </ul>
          </nav>


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

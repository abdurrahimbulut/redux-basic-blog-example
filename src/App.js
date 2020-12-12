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
            <Route exact path="/">
              <h1>
                Blog app
              </h1>
              <Blogs />
            </Route>
            <Route path="/blog-details/:id"  render={(props) => <BlogDetails {...props}/>} />
            <Route path="/add-blog">
              <h1>
                Add Blog
              </h1>
              <AddBlog/>
            </Route>
            <Route path="/edit-blog/:id" render={(props) => <EditBlog {...props}/>} />
              
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;

import Blogs from './components/blogs/Blogs';
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
                <Link to="/about">Add Blog</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route path="/">
              <h1>
                Blog app
              </h1>
              <Blogs />
            </Route>
            <Route path="/blog-details/:id">
              <h1>
                Blog Details
              </h1>
            </Route>
            <Route path="/add-blog">
              <h1>
                Add Blog
              </h1>
            </Route>
            <Route path="/edit-blog/:id">
              <h1>
                Edit Blog
              </h1>
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;

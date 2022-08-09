import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/blog/">
              <Home/>
            </Route>
            <Route path="/blog/Create">
              <Create/>
            </Route>
            <Route path="/blog/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/blog/*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

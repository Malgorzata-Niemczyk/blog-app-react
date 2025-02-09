import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/blog-details/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

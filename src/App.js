import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
        </Switch>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

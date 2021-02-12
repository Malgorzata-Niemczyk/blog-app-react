import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
      <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

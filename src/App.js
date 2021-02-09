import BlogsList from "./components/BlogsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <BlogsList />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import BlogsList from "./components/BlogsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <BlogsList />
      <Footer />
    </div>
  );
}

export default App;

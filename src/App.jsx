import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center px-8 py-0 gap-8">
        <Content />
        <Social />
      </div>
      <Footer />
    </Router>
  );
}

export default App;

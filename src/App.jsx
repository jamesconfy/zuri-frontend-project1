import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center px-8 py-0 gap-8">
        <Content />
      </div>
    </Router>
  );
}

export default App;

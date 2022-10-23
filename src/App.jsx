import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <Router>
      <div>
        <Button title="Twitter Link" aaddress="" />
        <Button title="Zuri Team" aaddress="" />
        <Button title="Zuri Books" aaddress="" />
        <Button title="Python Books" aaddress="" />
        <Button title="Background Check for Coders" aaddress="" />
        <Button title="Design Books" aaddress="" />
      </div>
    </Router>
  );
}

export default App;

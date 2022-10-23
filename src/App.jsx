import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <Router>
      <div className="md:container md:mx-auto">
        <Button title="Twitter Link" address="" />
        <Button title="Zuri Team" address="https://training.zuri.team/" id="btn__zuri" />
        <Button title="Zuri Books" address="http://books.zuri.team" id="books" />
        <Button title="Python Books" address="https://books.zuri.team/python-for-beginners?ref_id=Confidence James" id="book__python" />
        <Button title="Background Check for Coders" address="https://background.zuri.team" id="pitch" />
        <Button title="Design Books" address="https://books.zuri.team/design-rules" id="book__design" />
      </div>
    </Router>
  );
}

export default App;

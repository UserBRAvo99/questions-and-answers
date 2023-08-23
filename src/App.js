import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import CSSInfo from "./CSS/CSS";
import JavaScriptInfo from "./JavaScript/JavaScript";
import ReactInfo from "./React/React";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
        <Link to="/react">React</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CSSInfo />} />
        <Route path="/javascript" element={<JavaScriptInfo />} />
        <Route path="/react" element={<ReactInfo />} />
      </Routes>
    </div>
  );
}

export default App;

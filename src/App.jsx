import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import CSSInfo from "./Pages/CSS/CSS";
import JavaScriptInfo from "./Pages/JavaScript/JavaScript";
import ReactInfo from "./Pages/React/React";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
        <Link to="/react">React</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<CSSInfo />} />
          <Route path="/javascript" element={<JavaScriptInfo />} />
          <Route path="/react" element={<ReactInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

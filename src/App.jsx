import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CssInfo from "./Pages/CssInfo";
import JavaScriptInfo from "./Pages/JavaScript";
import ReactInfo from "./Pages/React";
import NotFound from "./Pages/NotFound";
import Layout from "./Layout/Layout";
import HTMLInfo from "./Pages/HTMLInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTMLInfo />} />
        <Route path="/css" element={<CssInfo />} />
        <Route path="/javascript" element={<JavaScriptInfo />} />
        <Route path="/react" element={<ReactInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

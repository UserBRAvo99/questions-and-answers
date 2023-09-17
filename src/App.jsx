import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const JavaScriptInfo = lazy(() => import("./Pages/JavaScript"));
const ReactInfo = lazy(() => import("./Pages/React"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Layout = lazy(() => import("./Layout/Layout"));
const HTMLInfo = lazy(() => import("./Pages/HTMLInfo"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="html" element={<HTMLInfo />} />
          <Route path="javascript" element={<JavaScriptInfo />} />
          <Route path="react" element={<ReactInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

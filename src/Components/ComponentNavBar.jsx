import React from "react";
import { Link } from "react-router-dom";

function ComponentNavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/html">HTML</Link>
      <Link to="/css">CSS</Link>
      <Link to="/javascript">JavaScript</Link>
      <Link to="/react">React</Link>
    </nav>
  );
}

export default ComponentNavBar;

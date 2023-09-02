import React from "react";
import { NavLink } from "react-router-dom";

function ComponentNavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/html">HTML&CSS</NavLink>
      {/* <NavLink to="/css">CSS</NavLink> */}
      <NavLink to="/javascript">JavaScript</NavLink>
      <NavLink to="/react">React</NavLink>
    </nav>
  );
}

export default ComponentNavBar;

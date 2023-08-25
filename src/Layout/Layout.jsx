import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/css">CSS</Link>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/react">React</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;

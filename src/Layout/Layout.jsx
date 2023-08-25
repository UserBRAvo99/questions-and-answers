import React from "react";
import { Outlet } from "react-router-dom";
import ComponentNavBar from "../Components/ComponentNavBar";

function Layout() {
  return (
    <>
      <ComponentNavBar />
      <Outlet />
    </>
  );
}

export default Layout;

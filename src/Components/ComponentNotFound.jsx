import React from "react";
import { Link } from "react-router-dom";

function ComponentNotFound() {
  return (
    <div>
      <h1>
        Pages is not found! You can go back at
        <Link to="/">home</Link>
      </h1>
    </div>
  );
}

export default ComponentNotFound;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import User from "../URL_Parameters/user";

const URL_Parameters = () => {
  return (
    <>
      {" "}
      <h1>URL Parameters</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/user/john">John</Link>
            </li>
            <li>
              <Link to="/user/jane">Jane</Link>
            </li>
            <li>
              <Link to="/user/jim">Jim</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index path="/user/:username" element={<User/>} />
        </Routes>
      </Router>{" "}
    </>
  );
};

export default URL_Parameters;

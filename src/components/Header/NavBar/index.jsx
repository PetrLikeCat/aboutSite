import React from "react";
import { s } from "./navBar.module.scss";
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9045/9045107.png"
              alt="icons"
            />{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
              alt="icons"
            />{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="icons"
            />{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="icons"
            />{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

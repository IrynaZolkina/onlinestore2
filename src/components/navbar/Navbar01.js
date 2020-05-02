import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";

import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
      navbarMenu: [
        {
          title: "парфуми",
          subMenu: [
            "чоловiчi",
            "жiночi",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
        {
          title: "макияж",
          subMenu: [],
        },

        {
          title: "волосся",
          subMenu: [],
        },
        {
          title: "нiгтi",
          subMenu: [],
        },
        {
          title: "догляд за шкiрою",
          subMenu: [],
        },
        {
          title: "чоловiкам",
          subMenu: [],
        },
        {
          title: "дiтям",
          subMenu: [],
        },
        {
          title: "аксесуари",
          subMenu: [],
        },
        {
          title: "подарунки",
          subMenu: [],
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <nav>
          <ul>
            <li className="dropdown">
              <NavLink to="#">{"парфуми".toUpperCase()} </NavLink>
              <ul className="menu-area">
                <ul>
                  <h4>our company</h4>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Flogo1.jpg?alt=media&token=b4757b87-24c6-496f-9f4d-1762cdac7a0d"
                    alt=""
                  />
                </ul>
                <ul>
                  <h4>{"жiночi".toUpperCase()}</h4>
                  <li>
                    <a href="">{"жiночi".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"11111111".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"fffffffffffffff".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"жiночi".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"11111111".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"fffffffffffffff".toUpperCase()}</a>
                  </li>
                </ul>
                <ul>
                  <h4>{"нишевi".toUpperCase()}</h4>
                  <li>
                    <a href="">{"rrrrrrrrrr".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"111111uuuuuuuuu11".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"hhhhhhhhhh".toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="">{"hkk".toUpperCase()}</a>
                  </li>
                </ul>
                <ul>
                  <h4>{"мiнiатюри".toUpperCase()}</h4>
                </ul>
                <ul>
                  <h4>{"вiалки".toUpperCase()}</h4>
                </ul>
                <ul>
                  <h4>{"дитячи".toUpperCase()}</h4>
                </ul>
              </ul>
            </li>
            <li>
              <NavLink to="#">{"макияж".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"волосся".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"нiгтi".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"догляд за шкiрою".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"чоловiкам".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"дiтям".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"аксесуари".toUpperCase()} </NavLink>
            </li>
            <li>
              <NavLink to="#">{"подарунки".toUpperCase()} </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

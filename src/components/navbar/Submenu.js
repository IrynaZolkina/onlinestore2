/**** Subenu component is called from Navbar */

import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./submenu.css";

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
    };
  }
  render() {
    const navbarSubMenu = this.props.navbarSubMenu;
    if (this.state.clearSubmenu === true) {
      return (
        <div className="test47">
          <div className="submenu-container2">
            {/* <a className="hover-border" href="">
                {this.props.title}
              </a> */}
            <div
              className="menu-sub"
              onClick={() => {
                this.setState({ clearSubmenu: false });
                setTimeout(() => this.setState({ clearSubmenu: true }), 500);
              }}
            >
              {/* /************ FIRST COLUMN************  */}
              <div className="menu-col-1">
                <ul className="">
                  {navbarSubMenu.map((element, index) => {
                    if (index < 15) {
                      if (element.search("#") === 0) {
                        return (
                          <div className="title-category" key={index}>
                            <NavLink to={"/shop/:123"}>
                              {element.slice(1).toUpperCase()}
                            </NavLink>
                          </div>
                        );
                      } else {
                        if (element.search("https") === 0) {
                          return (
                            <div className="" key={index}>
                              <img
                                src={element}
                                className="img-menu-1-col"
                                alt="Poccccc"
                              />
                            </div>
                          );
                        } else {
                          if (element.substring(0, 1) === ".") {
                            return (
                              <li className="text-submenu" key={index}>
                                <NavLink to={"/:123"}>
                                  {element.slice(1)}
                                </NavLink>
                              </li>
                            );
                          } else {
                            if (element.substring(0, 1) === "-") {
                              return (
                                <div className="text-sub-sub-menu" key={index}>
                                  <NavLink to={"/shop/:123"}>{element}</NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  })}
                </ul>
              </div>
              {/* /************ SECOND COLUMN************  */}
              <div className="menu-col-2">
                <ul className="">
                  {navbarSubMenu.map((element, index) => {
                    if ((index >= 15) & (index < 40)) {
                      if (element.search("#") === 0) {
                        return (
                          <div className="title-category" key={index}>
                            <NavLink to={"/:123"}>
                              {element.slice(1).toUpperCase()}
                            </NavLink>
                          </div>
                        );
                      } else {
                        if (element.search("https") === 0) {
                          return (
                            <div className="" key={index}>
                              <img
                                src={element}
                                className="img-menu-1-col"
                                alt="Poccccc"
                              />
                            </div>
                          );
                        } else {
                          if (element.substring(0, 1) === ".") {
                            return (
                              <li className="text-submenu" key={index}>
                                <NavLink to={"/:123"}>
                                  {element.slice(1)}
                                </NavLink>
                              </li>
                            );
                          } else {
                            if (element.substring(0, 1) === "-") {
                              return (
                                <div className="text-sub-sub-menu" key={index}>
                                  <NavLink to={"/:123"}>{element}</NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  })}
                </ul>
              </div>
              {/* /************ THIRD COLUMN************  */}
              <div className="menu-col-3">
                <ul className="">
                  {navbarSubMenu.map((element, index) => {
                    if ((index >= 40) & (index < 65)) {
                      if (element.search("#") === 0) {
                        return (
                          <div className="title-category" key={index}>
                            <NavLink to={"/:123"}>
                              {element.slice(1).toUpperCase()}
                            </NavLink>
                          </div>
                        );
                      } else {
                        if (element.search("https") === 0) {
                          return (
                            <div className="" key={index}>
                              <img
                                src={element}
                                className="img-menu-1-col"
                                alt="Poccccc"
                              />
                            </div>
                          );
                        } else {
                          if (element.substring(0, 1) === ".") {
                            return (
                              <li className="text-submenu" key={index}>
                                <NavLink to={"/:123"}>
                                  {element.slice(1)}
                                </NavLink>
                              </li>
                            );
                          } else {
                            if (element.substring(0, 1) === "-") {
                              return (
                                <div className="text-sub-sub-menu" key={index}>
                                  <NavLink to={"/:123"}>{element}</NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  })}
                </ul>
              </div>
              {/* /************ FORTH COLUMN************  */}
              <div className="menu-col-4">
                <ul className="">
                  {navbarSubMenu.map((element, index) => {
                    if ((index >= 65) & (index < 95)) {
                      if (element.search("#") === 0) {
                        return (
                          <div className="title-category" key={index}>
                            <NavLink to={"/:123"}>
                              {element.slice(1).toUpperCase()}
                            </NavLink>
                          </div>
                        );
                      } else {
                        if (element.search("https") === 0) {
                          return (
                            <div className="" key={index}>
                              <img
                                src={element}
                                className="img-menu-1-col"
                                alt="Poccccc"
                              />
                            </div>
                          );
                        } else {
                          if (element.substring(0, 1) === ".") {
                            return (
                              <li className="text-submenu" key={index}>
                                <NavLink to={"/:123"}>
                                  {element.slice(1)}
                                </NavLink>
                              </li>
                            );
                          } else {
                            if (element.substring(0, 1) === "-") {
                              return (
                                <div className="text-sub-sub-menu" key={index}>
                                  <NavLink to={"/:123"}>{element}</NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  })}
                </ul>
              </div>
              {/* /************ 5-TH COLUMN************  */}
              <div className="menu-col-5">
                <ul className="">
                  {navbarSubMenu.map((element, index) => {
                    if ((index >= 95) & (index < 125)) {
                      if (element.search("#") === 0) {
                        return (
                          <div className="title-category" key={index}>
                            <NavLink to={"/:123"}>
                              {element.slice(1).toUpperCase()}
                            </NavLink>
                          </div>
                        );
                      } else {
                        if (element.search("https") === 0) {
                          return (
                            <div className="" key={index}>
                              <img
                                src={element}
                                className="img-menu-1-col"
                                alt="Poccccc"
                              />
                            </div>
                          );
                        } else {
                          if (element.substring(0, 1) === ".") {
                            return (
                              <li className="text-submenu" key={index}>
                                <NavLink to={"/:123"}>
                                  {element.slice(1)}
                                </NavLink>
                              </li>
                            );
                          } else {
                            if (element.substring(0, 1) === "-") {
                              return (
                                <div className="text-sub-sub-menu" key={index}>
                                  <NavLink to={"/:123"}>{element}</NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  })}
                </ul>
              </div>
              {/* /************ 6-TH COLUMN************  */}
              <div className="menu-col-5">
                <ul className="">
                  {navbarSubMenu.map((element, index) => {
                    if ((index >= 125) & (index < 150)) {
                      if (element.search("#") === 0) {
                        return (
                          <div className="title-category" key={index}>
                            <NavLink to={"/:123"}>
                              {element.slice(1).toUpperCase()}
                            </NavLink>
                          </div>
                        );
                      } else {
                        if (element.search("https") === 0) {
                          return (
                            <div className="" key={index}>
                              <img
                                src={element}
                                className="img-menu-1-col"
                                alt="Poccccc"
                              />
                            </div>
                          );
                        } else {
                          if (element.substring(0, 1) === ".") {
                            return (
                              <li className="text-submenu" key={index}>
                                <NavLink to={"/:123"}>
                                  {element.slice(1)}
                                </NavLink>
                              </li>
                            );
                          } else {
                            if (element.substring(0, 1) === "-") {
                              return (
                                <div className="text-sub-sub-menu" key={index}>
                                  <NavLink to={"/:123"}>{element}</NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default withRouter(Submenu);

/**** Subenu component is called from Navbar */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
    };
  }
  render() {
    if (this.state.clearSubmenu === true) {
      return (
        <div>
          {/* <a className="hover-border" href="">
                {this.props.title}
              </a> */}
          <div
            class="menu-sub"
            onClick={() => {
              this.setState({ clearSubmenu: false });
              setTimeout(() => this.setState({ clearSubmenu: true }), 500);
            }}
          >
            <div class="menu-col-2">
              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <NavLink to="/shoppage">SSSSSSSSS</NavLink>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
                <li>
                  <a href="">Link 03</a>
                </li>
                <li>
                  <a href="">Link 04</a>
                </li>
                <li>
                  <a href="">Link 05</a>
                </li>
              </ul>

              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <a href="">Link 01</a>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
              </ul>

              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <a href="">Link 01</a>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
              </ul>
            </div>

            <div class="menu-col-1">
              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <a href="">Link 01</a>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
                <li>
                  <a href="">Link 03</a>
                </li>
                <li>
                  <a href="">Link 04</a>
                </li>
                <li>
                  <a href="">Link 05</a>
                </li>
              </ul>

              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <a href="">Link 01</a>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
                <li>
                  <a href="">Link 03</a>
                </li>
                <li>
                  <a href="">Link 04</a>
                </li>
                <li>
                  <a href="">Link 05</a>
                </li>
              </ul>
            </div>

            <div class="menu-col-1">
              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <a href="">Link 01</a>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
                <li>
                  <a href="">Link 03</a>
                </li>
                <li>
                  <a href="">Link 04</a>
                </li>
                <li>
                  <a href="">Link 05</a>
                </li>
              </ul>

              <h3 class="menu-category">Category</h3>
              <ul>
                <li>
                  <a href="">Link 01</a>
                </li>
                <li>
                  <a href="">Link 02</a>
                </li>
                <li>
                  <a href="">Link 03</a>
                </li>
                <li>
                  <a href="">Link 04</a>
                </li>
                <li>
                  <a href="">Link 05</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Submenu;

/**** Subenu component is called from Navbar */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
    };
  }
  render() {
    const navbarSubMenu = this.props.navbarSubMenu;
    console.log("mmmm", navbarSubMenu);
    if (this.state.clearSubmenu === true) {
      if (navbarSubMenu !== []) {
        return (
          <div>
            <div
              class="menu-sub"
              onClick={() => {
                this.setState({ clearSubmenu: false });
                setTimeout(() => this.setState({ clearSubmenu: true }), 500);
              }}
            >
              <div className="menu-col-1">
                <ul>
                  {navbarSubMenu.map((ell, ind) => {
                    console.log("hhhhhhhhhhhhhh", ell);
                    if (
                      (ind < 4) &
                      (ell.search("#") !== 0) &
                      (ell.search("https") !== 0)
                    ) {
                      /*(
                      <NavLink to={"/col/" + ell + "-" + ell}>{ell}</NavLink>
                    ) : (ind < 4) & (ell.search("https") === 0) ? (
                      <div className="" key={ind}>
                        <img src={ell} className="img-menu-bd" alt="Poccccc" />
                      </div>
                    ) : (
                      ind < 4 && ( */
                      return (
                        <div className="title-category" key={ind}>
                          {ell.slice(1)}
                        </div>
                      );
                    }
                    /*   )
                    ); */
                  })}
                </ul>
              </div>

              <div className="menu-col-1">
                <ul>
                  {navbarSubMenu.map((ell, ind) => {
                    return (
                      <li key={ind}>
                        {() => {
                          return (ind >= 4) &
                            (ind < 8) &
                            (ell.search("#") !== 0) ? (
                            <NavLink to={"/col/" + ell + "-" + ell}>
                              {ell}
                            </NavLink>
                          ) : (ind >= 4) &
                            (ind < 8) &
                            (ell.search("#") === 0) ? (
                            <div className="title-category" key={ind}>
                              {ell.slice(1)}
                            </div>
                          ) : (
                            <div key={ind}></div>
                          );
                        }}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="menu-col-1">
                <ul>
                  {navbarSubMenu.map((ell, ind) => {
                    return (
                      <li key={ind}>
                        {() => {
                          return (ind >= 8) &
                            (ind <= 12) &
                            (ell.search("#") !== 0) &
                            (ell.search("https") !== 0) ? (
                            <NavLink to={"/col/" + ell + "-" + ell}>
                              {ell}
                            </NavLink>
                          ) : (ind >= 8) &
                            (ind <= 12) &
                            (ell.search("#") !== 0) &
                            (ell.search("https") === 0) ? (
                            <div className="" key={ind}>
                              <img
                                src={ell}
                                className="img-menu-bd"
                                alt="Poccccc"
                              />
                            </div>
                          ) : (ind >= 8) &
                            (ind < 12) &
                            (ell.search("#") === 0) ? (
                            <div className="title-category" key={ind}>
                              {ell.slice(1)}
                            </div>
                          ) : (
                            <div key={ind}></div>
                          );
                        }}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/*  <div class="menu-col-2">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <NavLink to="/shoppage">SSSSSSSSS</NavLink>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                </ul>
              </div>

              <div class="menu-col-1">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>
              </div> */}

              {/* <div class="menu-col-1">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
export default Submenu;

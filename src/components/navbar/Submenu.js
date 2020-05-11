/**** Subenu component is called from Navbar */

import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./submenu.css";
import SubmenuElement from "./SubmenuElement";

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
    };
  }
  render() {
    //const navbarSubMenu = this.props.navbarSubMenu.map((el) => el.title);
    const navbarSubMenu = this.props.navbarSubMenu;

    //console.log(navbarSubMenu, "navbarSubMenu");
    const { submenuItemsInColumn } = this.props;
    //console.log(order, "order");
    let title1 = [];
    let title2 = [];
    let title3 = [];
    let title4 = [];
    let title5 = [];
    let title6 = [];

    navbarSubMenu.forEach((element, index) => {
      if (index < submenuItemsInColumn.first) {
        title1 = [...title1, element];
      } else {
        if (
          (index >= submenuItemsInColumn.first) &
          (index < submenuItemsInColumn.second)
        ) {
          title2 = [...title2, element];
        } else {
          if (
            (index >= submenuItemsInColumn.second) &
            (index < submenuItemsInColumn.third)
          ) {
            title3 = [...title3, element];
          } else {
            if (
              (index >= submenuItemsInColumn.third) &
              (index < submenuItemsInColumn.forth)
            ) {
              title4 = [...title4, element];
            } else {
              if (
                (index >= submenuItemsInColumn.forth) &
                (index < submenuItemsInColumn.fifth)
              ) {
                title5 = [...title5, element];
              } else {
                if (index < submenuItemsInColumn.sixth) {
                  title6 = [...title6, element];
                }
              }
            }
          }
        }
      }
    });

    if (this.state.clearSubmenu === true) {
      return (
        <div className="test47">
          <div className="submenu-container2">
            <div
              className="menu-sub"
              onClick={() => {
                this.setState({ clearSubmenu: false });
                setTimeout(() => this.setState({ clearSubmenu: true }), 500);
              }}
            >
              {/* /************ FIRST COLUMN************  */}
              <div className="menu-col-1">
                {title1.map((element, index) => (
                  <ul key={index} className="">
                    <SubmenuElement element={element} index={index} />
                  </ul>
                ))}
              </div>

              {/* /************ SECOND COLUMN************  */}
              <div className="menu-col-2">
                {title2.map((element, index) => (
                  <ul key={index} className="">
                    <SubmenuElement element={element} index={index} />
                  </ul>
                ))}
              </div>
              {/************ THIRD COLUMN************/}
              <div className="menu-col-3">
                {title3.map((element, index) => (
                  <ul key={index} className="">
                    <SubmenuElement element={element} index={index} />
                  </ul>
                ))}
              </div>
              {/* /************ FORTH COLUMN************  */}
              <div className="menu-col-4">
                {title4.map((element, index) => (
                  <ul key={index} className="">
                    <SubmenuElement element={element} index={index} />
                  </ul>
                ))}
              </div>
              {/* /************ 5-TH COLUMN************  */}
              <div className="menu-col-5">
                {title5.map((element, index) => (
                  <ul key={index} className="">
                    <SubmenuElement element={element} index={index} />
                  </ul>
                ))}
              </div>
              {/* /************ 6-TH COLUMN************  */}
              <div className="menu-col-6">
                {title6.map((element, index) => (
                  <ul key={index} className="">
                    <SubmenuElement element={element} index={index} />
                  </ul>
                ))}
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

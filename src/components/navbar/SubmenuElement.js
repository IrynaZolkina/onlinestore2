import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const SubmenuElement = ({ element, index }) => {
  if (element.title.search("#") === 0) {
    return (
      <div className="title-category" key={index}>
        <NavLink to={`/shop/${element.number}`}>
          {element.title.slice(1).toUpperCase()}
        </NavLink>
      </div>
    );
  } else {
    if (element.title.search("https") === 0) {
      return (
        <div className="" key={index}>
          <img src={element.title} className="img-menu-1-col" alt="Poccccc" />
        </div>
      );
    } else {
      if (element.title.substring(0, 1) === ".") {
        return (
          <li className="text-submenu" key={index}>
            <NavLink to={`/shop/${element.number}`}>
              {element.title.slice(1)}
            </NavLink>
          </li>
        );
      } else {
        if (element.title.substring(0, 1) === "-") {
          return (
            <div className="text-sub-sub-menu" key={index}>
              <NavLink to={`/shop/${element.title.substring(1)}`}>
                {element.title}
              </NavLink>
            </div>
          );
        } else {
          return "";
        }
      }
    }
  }
};

export default SubmenuElement;

import React from "react";
import "./menuitem.css";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  //console.log(match, "kkkkkkkkkkkk");
  //console.log(linkUrl, "llkkkkkkkkkkkk");
  return (
    <div
      className={`${size} menu-item`}
      onClick={() =>
        //console.log("object,", `${match.url}${linkUrl}`),
        history.push(`${match.url}${linkUrl}`)
      }
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

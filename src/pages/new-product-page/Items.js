import React from "react";
/*import Post from "./Post";*/
import AddItem from "./AddItem";
import Item from "./Item";
import { withRouter } from "react-router-dom";

const Items = ({ items }) => {
  //console.log("items-------------", items);
  return (
    <div>
      <div className="">
        <h1>post</h1>
        <div className="collection-grid-container">
          {items.map((item) => (
            //console.log("item************", item),
            <Item {...item} key={item.id} />
          ))}
          {/*  <AddItem /> */}
        </div>
      </div>
    </div>
  );
};
export default withRouter(Items);

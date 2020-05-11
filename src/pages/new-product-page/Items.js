import React from "react";
/*import Post from "./Post";*/
import AddItem from "./AddItem";
import Item from "./Item";

const Items = ({ items }) => {
  return (
    <div>
      <div className="">
        <h1>post</h1>
        <div className="collection-grid-container">
          {items.map((item) => (
            <Item {...item} key={item.id} />
          ))}
          {/*  <AddItem /> */}
        </div>
      </div>
    </div>
  );
};
export default Items;

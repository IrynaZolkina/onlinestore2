import React from "react";
import { firestore } from "../../firebase/FirebaseUtils";
import Edit from "../SingleItemPage";
import { NavLink, withRouter } from "react-router-dom";
import Product from "./Product";

//import moment from "moment";

const Item = ({
  id,
  title,
  price,
  discountPrice,
  brand,
  collectionsArray,
  imageUrl1,
  imageUrl2,
  content,
  user,
  createdAt,
  stars,
  comments,
}) => {
  /* console.log(
    "Item-component++++++++++++++",
    id,
    title,
    content,
    user,
    createdAt,
    stars,
    comments
  ); */

  /* const id1 = item.id;
  console.log("Item-component+++++ PROPS ", props);
  console.log("Item-component+++++ ITEM ", item);*/
  //console.log("Item-component+++++ ID ", id);
  const itemRef = firestore.collection("items").doc(id);
  const remove = () => itemRef.delete();

  return (
    <div className="item-container">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${imageUrl1})`,
        }}
        alt=""
      />
      <div className="test-c">
        <div
          className="item-image-2"
          style={{
            backgroundImage: `url(${imageUrl2})`,
          }}
          alt=""
        />
        <div className="item-footer">
          <button className="">Star</button>
          <button className="" onClick={remove}>
            Delete
          </button>

          <NavLink className="" to={`/testpage/${id}`}>
            EDIT
          </NavLink>
        </div>
      </div>

      <div className="item-footer">
        <span>{brand}</span>
        <span>{price}</span>
      </div>
      <div className="item-footer">
        <span>{title}</span>

        <span>{discountPrice}</span>
      </div>
    </div>
  );
};

export default withRouter(Item);

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
    <div className="grid-box">
      <div className="grid-item">
        <img
          className="grid-image"
          style={{
            backgroundImage: `url(${imageUrl1})`,
          }}
          alt=""
        />

        <h1>{id}</h1>
        <h3>{title}</h3>
        <div>{brand}</div>

        <div>{price}</div>

        <div className="Post--meta">
          <div>
            <p>
              <span role="img" aria-label="star">
                ⭐️
              </span>
              {stars}
            </p>
            <p>
              <span role="img" aria-label="comments">
                🙊
              </span>
              {comments}
            </p>
          </div>
          <div>
            <button className="star">Star</button>
            <button className="delete" onClick={remove}>
              Delete
            </button>
            {/* <button onClick={() => <Product id={id} />}>EDIT</button> */}
            <NavLink className="" to={`/testpage/${id}`}>
              EDIT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Item);

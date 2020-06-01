import React from "react";
import { firestore } from "../../firebase/FirebaseUtils";

import { NavLink, withRouter } from "react-router-dom";

//import moment from "moment";

const Item = ({
  id,
  title,
  titleCode,
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
  console.log("Item-component+++++ PROPS ", props);*/
  //console.log("Item-component+++++ ITEM ", id);
  //console.log("Item-component+++++ ID ", id);
  const itemRef = firestore.collection("items").doc(id);

  const remove = () => itemRef.delete();
  //const string11 = titleCode.substring(0, 2);
  const string11 = titleCode.substring(0, 2);
  const string111 = title.substring(0, string11);

  const string22 = titleCode.substring(2, 4);
  const string222 = title.substring(
    parseInt(string11) + 1,
    parseInt(string11) + 1 + parseInt(string22)
  );

  const string33 = titleCode.substring(4, 6);
  const string333 = title.substring(
    parseInt(string11) + parseInt(string22) + 2,
    parseInt(string11) + parseInt(string22) + parseInt(string33) + 2
  );

  const string44 = titleCode.substring(6, 8);
  const string444 = title.substring(
    parseInt(string11) + parseInt(string22) + parseInt(string33) + 3,
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      3
  );

  const string55 = titleCode.substring(8, 10);
  const string555 = title.substring(
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      4,
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      parseInt(string55) +
      4
  );

  const title1 = string111;

  const title2 = string222;

  const title3 = string333;

  const title4 = string444;
  const title5 = string555;

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
        <div className="item-footer-hover">
          <span className="brand-hover-card">{title1}</span>
          <span className="brand-hover-card">{title2}</span>
          <span className="brand-hover-card">{title3}</span>
          <span className="brand-hover-card">{title4}</span>
          <span className="brand-hover-card">{title5}</span>
          <NavLink className="" to={`/testpage/${id}`}>
            EDIT
          </NavLink>{" "}
          <div>' '</div>
          <button className="" onClick={remove}>
            Delete
          </button>
        </div>
      </div>

      <div className="item-footer">
        <span>{title1}</span>
        <span>{price}</span>
      </div>
      <div className="item-footer">
        <span>{title2}</span>

        <span>{discountPrice}</span>
      </div>
    </div>
  );
};

export default withRouter(Item);

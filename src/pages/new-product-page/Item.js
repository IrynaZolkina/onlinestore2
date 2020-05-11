import React from "react";
import { firestore } from "../../firebase/FirebaseUtils";

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
  //console.log(title, content, user, createdAt, stars, comments);
  const itemRef = firestore.doc(`items/${id}`);
  const remove = () => itemRef.delete();
  return (
    <div className="">
      <div className="grid-item">
        <img
          className="image"
          style={{
            backgroundImage: `url(${imageUrl1})`,
          }}
          alt=""
        />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

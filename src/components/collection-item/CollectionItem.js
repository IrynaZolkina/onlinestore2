import React from "react";
import "./collectionitem.css";
//import { connect } from "react-redux";

//import CustomButton from "./CustomButton";
//import { addItem } from "../redux/cart/cartActions";

const CollectionItem = ({ item, name, price, imageUrl, addItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {/* <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton> */}
    </div>
  );
};

/* const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
*/
export default CollectionItem;

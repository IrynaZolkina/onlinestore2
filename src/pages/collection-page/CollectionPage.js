import React from "react";

import { connect } from "react-redux";
//import { selectCartItems } from "../redux/cart/cartSelectors";
//import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collectionpage.css";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { Link } from "react-router-dom";

const CollectionPage = ({ collection }) => {
  console.log("this is CollectionPage");
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";

import CollectionPage from "../../collections/CollectionPage";

const ShopPage = ({ match }) => {
  console.log("ShopPage - component ", match);
  console.log(match.path);
  return (
    <div className="shop-page">
      {/* {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))} -- moved to own component CollectionsOverview*/}
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
    </div>
  );
};
/* const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
}); */

export default ShopPage;
//export default connect(mapStateToProps)(ShopPage);

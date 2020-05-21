import React, { Component } from "react";
import CollectionList from "./CollectionList";
import SelectCollection from "./SelectCollection";

class Collections extends Component {
  render() {
    const collectionsArray = this.props;
    const arrayNavbar = this.props;

    return (
      <div>
        {collectionsArray !== [] ? (
          <div>
            collections
            <CollectionList
              collectionsArray={collectionsArray}
              arrayNavbar={arrayNavbar}
              id={this.props.id}
            />
          </div>
        ) : (
          <div> NO COLLECTIONS YET</div>
        )}
        <button onClick={this.props.changeShowMenu}>SELECT COLLECTION</button>
        {this.props.showMenu && (
          <SelectCollection
            changeShowMenu={this.props.changeShowMenu}
            id={this.props.id}
            collectionsArray={collectionsArray}
            arrayNavbar={this.props.arrayNavbar}
          />
        )}
      </div>
    );
  }
}

export default Collections;

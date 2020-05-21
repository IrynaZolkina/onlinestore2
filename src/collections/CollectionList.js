import React from "react";
import { withRouter } from "react-router-dom";
import { firestore } from "../firebase/FirebaseUtils";
import CollectionFinder from "./CollectionFinder";

const CollectionList = (props) => {
  const { collectionsArray } = props.collectionsArray;
  const { arrayNavbar } = props.arrayNavbar;
  //console.log(arrayNavbar);

  let name = "";

  /* collectionsArray.map((element, index) =>
    arrayNavbar.map((level1Element) =>
      level1Element.code === element
        ? (name =
            level1Element.title.toUpperCase() + "....." + level1Element.code)
        : level1Element.subMenu.map((level2Element) =>
            level2Element.code === element
              ? (name =
                  level2Element.title.substring(1) +
                  "....." +
                  level2Element.code +
                  ".....")
              : null
          )
    )
  ); */
  let numberSubmenu2Level = "";
  let submenuArrayElement = "";
  return (
    <div>
      {
        /********** collectionElement - it is code, like '000107' ********** */
        /********** navbarElement - element in Navbar ********** */
        collectionsArray.map((collectionElement) =>
          arrayNavbar.map(
            (navbarElement, index) => (
              <div key={index}>
                <CollectionFinder
                  collectionElement={collectionElement}
                  navbarElement={navbarElement}
                  index={index}
                />
              </div>
            )
            /* navbarElement.code === collectionElement ? (
              <div key={index}>
                <span>
                  {" "}
                  {navbarElement.title.toUpperCase()}./.{navbarElement.code}
                </span>
                <span>DELETE from Collection</span>
              </div>
            ) : (
              navbarElement.subMenu.map((submenuElement) =>
                submenuElement.code === collectionElement ? (
                  <div key={index}>
                    <span>
                      {navbarElement.title.toUpperCase()}./.
                      {console.log(
                        "****",
                        navbarElement.subMenu.filter(
                          (doc) =>
                            doc.number ==
                            submenuElement.number.substring(0, 4) + "0000"
                        ).title
                      )}
                      {submenuElement.title.substring(1)}
                      .....{submenuElement.code}
                      .....
                    </span>
                    <span>DELETE from Collection</span>
                  </div>
                ) : null
              )
            ) */
          )
        )
      }
    </div>
  );
};

export default withRouter(CollectionList);

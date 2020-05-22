import React, { Component } from "react";
import { firestore } from "../firebase/FirebaseUtils";

import SelectSubmenu from "./SelectSubmenu";

class SelectCollection extends Component {
  state = {
    navbarChosen: false,
    navbarOrder: "",
    submenu: [],
  };

  addItemIntoCollections = (code1, number) => {
    const { collectionsArray } = this.props.collectionsArray;

    //console.log(collectionsArray, "this.props.collectionsArray");
    //console.log(this.props.arrayNavbar, "navbar");
    let arrayForAdding = [];

    /******** number in navbar   ***** */

    //console.log("numberInNavbar---", numberInNavbar);

    /******** arrayNavbar element in which order==numberInNavbar 
               - it's an array with 1 element(object)  *****/
    const chosenNavbarElementArray = this.props.arrayNavbar.filter(
      (doc) => doc.order == number.substring(0, 2)
    );
    //console.log("chosenNavbarElementArray---", chosenNavbarElementArray);

    /******** getting this object from array **********/
    const [chosenNavbarElementObject] = chosenNavbarElementArray;
    /* console.log(
      "chosenNavbarElementObject--",
      chosenNavbarElementObject,
      chosenNavbarElementArray
    ); */

    /******** getting code of the navbar collection with number 'numberInNavbar'*/
    const codeNavbarCollection = chosenNavbarElementObject.code;
    !collectionsArray.includes(codeNavbarCollection) &&
      (arrayForAdding = [...arrayForAdding, codeNavbarCollection]);
    //console.log("codeNavbarCollection---", codeNavbarCollection);
    //console.log("arrayForAdding---", arrayForAdding);

    /******** getting subMenu array */
    const submenuArray = chosenNavbarElementObject.subMenu;
    //console.log("submenuArray---", submenuArray);

    /******** number in submenu - 2-nd level  ***** */

    //console.log("numberSubmenu2Level----", numberSubmenu2Level);

    /******** submenu 2 level element - array with 1 element(object)  *****/
    const submenuArrayElement = submenuArray.filter(
      (doc) => doc.number == number.substring(0, 4) + "0000"
    );
    //console.log("submenuArrayElement-----", submenuArrayElement);

    /******** getting this object from array  *****/
    const [submenuArrayObject] = submenuArrayElement;
    /* console.log(submenuArrayObject, "***number2level***", submenuArrayElement); */

    /********* getting code  */
    const codeSubmenu2Level = submenuArrayObject.code;
    !collectionsArray.includes(codeSubmenu2Level) &&
      (arrayForAdding = [...arrayForAdding, codeSubmenu2Level]);
    //console.log("arrayForAdding---", arrayForAdding);
    //console.log(number.substring(4, 6), "********");

    /******** number in submenu - 3-nd level  ***** */

    if (number.substring(4, 6) !== "00") {
      const submenuArrayElement3Level = submenuArray.filter(
        (doc) => doc.number == number.substring(0, 6) + "00"
      );

      const [submenuArrayObject3Level] = submenuArrayElement3Level;

      const codeSubmenu3Level = submenuArrayObject3Level.code;
      !collectionsArray.includes(codeSubmenu3Level) &&
        (arrayForAdding = [...arrayForAdding, codeSubmenu3Level]);
    }
    if (number.substring(6, 8) !== "00") {
      !collectionsArray.includes(code1) &&
        (arrayForAdding = [...arrayForAdding, code1]);
    }

    arrayForAdding.map((code) => {
      //console.log(code, "codefffffffffffff");
      firestore
        .collection(code)
        .doc(this.props.id)
        .set({
          title: this.props.title,
          brand: this.props.brand,
          price: this.props.price,
          discountPrice: this.props.discountPrice,
          imageUrl1: this.props.imageUrl1,
          imageUrl2: this.props.imageUrl2,
        });
    });
    arrayForAdding = [...collectionsArray, ...arrayForAdding];
    //console.log("arrayForAdding---", arrayForAdding);
    firestore
      .collection("items")
      .doc(this.props.id)
      .set(
        {
          collectionsArray: [...arrayForAdding],
        },
        { merge: true }
      );
  };
  render() {
    return (
      <div>
        {this.props.arrayNavbar.map((element, index) => (
          <h4
            key={index}
            onClick={() =>
              this.setState(
                { navbarChosen: true },
                this.setState({
                  navbarOrder: element.order,
                  submenu: element.subMenu,
                })
              )
            }
          >
            <div>{element.title}</div>
          </h4>
        ))}
        {this.state.navbarChosen === true && (
          <SelectSubmenu
            submenu={this.state.submenu}
            changeShowMenu={this.props.changeShowMenu}
            addItemIntoCollections={this.addItemIntoCollections}
          />
        )}
      </div>
    );
  }
}
export default SelectCollection;

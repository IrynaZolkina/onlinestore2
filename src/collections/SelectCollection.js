import React, { Component } from "react";
import { firestore } from "../firebase/FirebaseUtils";

import SelectSubmenu from "./SelectSubmenu";

class SelectCollection extends Component {
  state = {
    //arrayNavbar: [],
    navbarChosen: false,
    navbarOrder: "",
    submenu: [],
  };

  addItemIntoCollections = (code1, number) => {
    /* console.log(
      code1,
      number,

      "---------number"
    ); */
    const { collectionsArray } = this.props.collectionsArray;
    //console.log(this.props.collectionsArray, "this.props.collectionsArray");
    //console.log(collectionsArray, "Array");
    let arrayForAdding = [];

    /******** number in navbar   ***** */
    const numberInNavbar = number.substring(0, 2);
    //console.log("numberInNavbar---", numberInNavbar);

    /******** arrayNavbar element in which order==numberInNavbar 
               - it's an array with 1 element(object)  *****/
    const chosenNavbarElementArray = this.props.arrayNavbar.filter(
      (doc) => doc.order == numberInNavbar
    );
    //console.log("chosenNavbarElementArray---", chosenNavbarElementArray);

    /******** getting this object from array **********/
    const [chosenNavbarElementObject] = chosenNavbarElementArray;
    //console.log("chosenNavbarElementObject--", chosenNavbarElementObject);

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
    const numberSubmenu2Level = number.substring(0, 4) + "0000";
    //console.log("numberSubmenu2Level----", numberSubmenu2Level);

    /******** submenu 2 level element - array with 1 element(object)  *****/
    const submenuArrayElement = submenuArray.filter(
      (doc) => doc.number == numberSubmenu2Level
    );
    //console.log("submenuArrayElement-----", submenuArrayElement);

    /******** getting this object from array  *****/
    const [submenuArrayObject] = submenuArrayElement;
    //console.log(submenuArrayObject, "***number2level***");

    /********* getting code  */
    const codeSubmenu2Level = submenuArrayObject.code;
    !collectionsArray.includes(codeSubmenu2Level) &&
      (arrayForAdding = [...arrayForAdding, codeSubmenu2Level]);
    //console.log("arrayForAdding---", arrayForAdding);
    //console.log(number.substring(4, 6), "********");

    /******** number in submenu - 3-nd level  ***** */
    const numberSubmenu3Level = number.substring(0, 6) + "00";
    //console.log("numberSubmenu3Level----", numberSubmenu3Level);

    /******** submenu 3 level element - array with 1 element(object)  *****/
    const submenuArrayElement3Level = submenuArray.filter(
      (doc) => doc.number == numberSubmenu3Level
    );
    //console.log("submenuArrayElement3Level-----", submenuArrayElement3Level);

    /******** getting this object from array  *****/
    const [submenuArrayObject3Level] = submenuArrayElement3Level;
    //console.log(submenuArrayObject3Level, "***number3level***");

    /********* getting code  */
    const codeSubmenu3Level = submenuArrayObject3Level.code;

    let arr = [...collectionsArray];

    if (number.substring(4, 6) == "00") {
      arr = [
        ...collectionsArray,
        codeNavbarCollection,
        codeSubmenu2Level,
        code1,
      ];
      !collectionsArray.includes(code1) &&
        (arrayForAdding = [code1, ...arrayForAdding]);
      //console.log("arrayForAdding---", arrayForAdding);
      const arr22 = [codeNavbarCollection, codeSubmenu2Level, code1];
      arr22.map((code) => {
        //console.log(code, "codefffffffffffff");
        firestore
          .collection("000001")
          .doc(this.props.id)
          .set({ name: "hello" });
      });
    } else {
      if (number.substring(6, 8) == "00") {
        arr = [
          ...collectionsArray,
          codeNavbarCollection,
          codeSubmenu2Level,
          code1,
        ];
        !collectionsArray.includes(code1) &&
          (arrayForAdding = [...arrayForAdding, code1]);
        //console.log("arrayForAdding---", arrayForAdding);
        const arr22 = [codeNavbarCollection, codeSubmenu2Level, code1];
        /* arr22.map((code) => {
          console.log(code, "codefffffffffffff");
          firestore
            .collection("000001")
            .doc(this.props.id)
            .set({ name: "hello" });
        }); */
      } else {
        arr = [
          ...collectionsArray,
          codeNavbarCollection,
          codeSubmenu2Level,
          codeSubmenu3Level,
          code1,
        ];
        /* const arr22 = [
          codeNavbarCollection,
          codeSubmenu2Level,
          codeSubmenu3Level,
          code1,
        ]; */
        !collectionsArray.includes(codeSubmenu3Level) &&
          (arrayForAdding = [...arrayForAdding, codeSubmenu3Level, code1]);
        //console.log("arrayForAdding---", arrayForAdding);
        /* arr22.map((code) => {
          console.log(code, "codefffffffffffff");
          firestore.collection(code).doc(this.props.id).set({ name: "hello" });
        }); */
      }
    }
    arrayForAdding.map((code) => {
      //console.log(code, "codefffffffffffff");
      firestore.collection(code).doc(this.props.id).set({ name: "hello" });
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

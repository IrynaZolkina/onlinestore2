import React from "react";

const CollectionFinder = ({ collectionElement, navbarElement, index }) => {
  let name = "";
  let nnn = "";
  let n1 = "";

  if (navbarElement.code === collectionElement) {
    name = navbarElement.title.toUpperCase() + "./." + "***"; //+ navbarElement.code
  } else {
    navbarElement.subMenu.map((submenuElement) =>
      submenuElement.code === collectionElement
        ? ((nnn = navbarElement.subMenu.filter(
            (element) =>
              element.number === submenuElement.number.substring(0, 4) + "0000"
          )),
          ([n1] = nnn),
          (name =
            navbarElement.title.toUpperCase() +
            "../.." +
            n1.title.substring(1)),
          submenuElement.number.substring(4, 6) === "00"
            ? submenuElement.number.substring(6, 8) !== "00"
              ? (name = name + ".../..." + submenuElement.title.substring(1))
              : null
            : ((nnn = navbarElement.subMenu.filter(
                (element) =>
                  element.number ===
                  submenuElement.number.substring(0, 6) + "00"
              )),
              ([n1] = nnn),
              (name = name + ".../..." + n1.title.toUpperCase().substring(1)),
              submenuElement.number.substring(6, 8) === "00"
                ? null
                : (name =
                    name + "...../....." + submenuElement.title.substring(1))))
        : null
    );
  }
  name !== "" && (nnn = "DELETE");
  return (
    <div>
      <h1>{name}</h1>
      <span>{nnn}</span>
    </div>
  );
};

export default CollectionFinder;

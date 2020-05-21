import React, { Component } from "react";

class SelectSubmenu extends Component {
  state = {
    showSubmenu: true,
  };

  render() {
    const { submenu } = this.props;

    if (this.state.showSubmenu === true) {
      return (
        <div
          className="menu-sub"
          onClick={() => {
            this.setState({ showSubmenu: false });
            this.props.changeShowMenu();
            //setTimeout(() => this.setState({ clearSubmenu: true }), 500);
          }}
        >
          {submenu.map((element, index) => (
            //console.log(element, " element"),
            <div key={index}>
              <h4
                onClick={() => {
                  this.props.addItemIntoCollections(
                    element.code,
                    element.number
                  );
                  /* console.log(
                        element.code,
                        element.number,

                        "---------number"
                      ); */
                }}
              >
                {element.title}
              </h4>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SelectSubmenu;

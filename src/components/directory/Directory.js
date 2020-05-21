import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { selectDirectorySections2 } from "../../redux/directory/directorySelectors";

import "./directory.css";

import MenuItem from "../menu-item/MenuItem";

const Directory = ({ sections, sections2, number, directoryName }) => {
  return (
    <div>
      <div className="directory-list-1">
        <div className="title-2">{directoryName}</div>

        <div className="homepage">
          <div className="directory-menu">
            {number === 1
              ? sections.map(({ id, ...otherSectionsProps }) => (
                  <MenuItem key={id} {...otherSectionsProps} />
                ))
              : sections2.map(({ id, ...otherSectionsProps }) => (
                  <MenuItem key={id} {...otherSectionsProps} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  sections2: selectDirectorySections2,
});

export default connect(mapStateToProps)(Directory);

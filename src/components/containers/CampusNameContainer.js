import React, { Component } from "react";
import PropTypes from "prop-types";
import { CampusNameView} from "../views";

class CampusNameContainer extends Component {
  render() {
    return <CampusNameView campus={this.props.campus} />;
  }
}

CampusNameContainer.propTypes = { campus: PropTypes.any };

export default CampusNameContainer;
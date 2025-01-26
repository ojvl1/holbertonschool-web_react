import React from "react";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection.jsx";
import "./BodySection.css";

const BodySectionWithMarginBottom = ({ title, children = null }) => { 
  return (
    <div className="bodySectionWithMargin">
    <BodySection title={title}>{children}</BodySection>
  </div>
  )
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  children: null,
};

export default BodySectionWithMarginBottom;
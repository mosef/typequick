import React from 'react';
import PropTypes from 'prop-types';

export const Info = props => (
  <div className="content-text">
    <p>{props.text}</p>
  </div>
);

export const Headline = props => (
  <div className="headline">
    <h2>{props.header} <span className="redTail">{props.tail}</span> </h2>
  </div>
);

export const InfoImg = props => (
  <div className="exampleImg">
    <img src={props.image} alt="" />
  </div>
);

Info.defaultProps = {
  text: 'Text not available',
};
Info.propTypes = {
  text: PropTypes.string,
};
Headline.defaultProps = {
  header: 'Headline not available',
  tail: 'unavailable',
};
Headline.propTypes = {
  header: PropTypes.string,
  tail: PropTypes.string,
};
InfoImg.defaultProps = {
  image: 'Headline not available',
};
InfoImg.propTypes = {
  image: PropTypes.string,
};

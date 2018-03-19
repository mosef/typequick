import React from 'react';
import PropTypes from 'prop-types';

export const HeaderImg = props => (
  <div className={props.name}>
    <img src={props.image} alt="" />
  </div>
);

HeaderImg.defaultProps = {
  image: 'Image not available',
};
HeaderImg.propTypes = {
  image: PropTypes.string,
};


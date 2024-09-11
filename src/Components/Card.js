import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ svg, text, style }) => {
  return (
    <div className="card" style={style}>
      <div className="circle">
        {svg}
      </div>
      <p>{text}</p>
      <div className="overlay"></div>
    </div>
  );
};

Card.propTypes = {
  svg: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Card;

import React from "react";
import PropTypes from "prop-types";

function Market(props) {

  return (
    <React.Fragment>
      <h3> {props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>
      <p>{props.location}</p>
    </React.Fragment>
  );
}

Market.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Market;






import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
      <h3> {props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>
      <p>{props.location}</p>
      <h4>{props.month}</h4>
      <p>{props.selection}</p>

    </React.Fragment>

  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};


export default Produce;
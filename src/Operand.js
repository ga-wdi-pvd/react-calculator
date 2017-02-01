import React from 'react';

function Operand(props) {
  return (
    <input
      type="number"
      value={props.value}
      data-index={props.index}
      onChange={(e) => props.handleChange(e)}
    />
  );
}

export default Operand;

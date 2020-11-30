import React from "react";

const Option = (props) => (
  <div>
    {props.option}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.option);
      }}
    >
      Remove
    </button>
  </div>
);
export default Option;

import React, { Fragment } from "react";

const OperatorButton = ({ operator: { char, value }, clickOprtatorBtn }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={clickOprtatorBtn} data-type="operator">
        {char}
      </button>
    </>
  );
};

export default OperatorButton;

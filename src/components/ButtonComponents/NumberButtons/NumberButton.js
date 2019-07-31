import React from "react";

const NumberButton = props => {
  // console.log("Numbers Button ", props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={props.clickNumberBtn} data-type="number">
        {props.btn}
      </button>
    </>
  );
};

export default NumberButton;

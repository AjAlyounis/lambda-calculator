import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
import styles from "./Numbers.module.css";
//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = ({ updateValue }) => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  console.log("showing in the console log", numberState);

  return (
    <div className={styles.number}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((number, index) => (
        <NumberButton
          key={index}
          btn={number}
          clickNumberBtn={() => updateValue(number)}
        />
      ))}
    </div>
  );
};

export default Numbers;

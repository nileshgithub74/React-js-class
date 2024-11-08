import React, { forwardRef } from "react";
import useToggle from "./UseToggle"; 

const ToggleButton = () => {
  const [isToggled, toggle] = useToggle(false); 

  return (
    <>
      <h1>{isToggled ? "ON" : "Off"}</h1>
      <button onClick={toggle}>{isToggled ?   " TURN OFF" : "  TURN ON " }</button>
    </>
  );
};

export default ToggleButton;

   
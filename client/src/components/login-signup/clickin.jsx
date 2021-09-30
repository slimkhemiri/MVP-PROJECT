import React from "react";

function Clickin(props) {
 
  return (
    <div>
      <button className="clickin1" onClick={props.handleClickRegister}>
        Register
      </button>
      <button className="clickin2" onClick={props.handleClickLogin}>
        LogIn
      </button>
    </div>
  );
}

export default Clickin;

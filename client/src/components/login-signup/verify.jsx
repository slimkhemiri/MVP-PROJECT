import React from "react";

function Verify(props) {
  console.log(props);
  return (
    <div>
      <button className="clickin1" onClick={props.handleClickVerify}>
        Client
      </button>
      <button className="clickin2" onClick={props.handleClickVerify}>
        Professional
      </button>
    </div>
  );
}

export default Verify;

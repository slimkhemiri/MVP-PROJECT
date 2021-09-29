import React from "react";
import "../../css/home.css";

function PutJob(props) {
  console.log(props);
  return (
    <div>
      <label>Your Company Name here :</label>
      <input
        type="text"
        placeholder="Put Your Company Name..."
        onChange={props.handleSaveCompName}
      />
      <br />
      <label>Your Phone Number here :</label>
      <input
        type="text"
        placeholder="Put Your Phone_Number..."
        onChange={props.handleSavePhoneNum}
      />
      <br />
      <label>Your Job Name here:</label>
      <input type="text" onChange={props.handleSaveJobName} />
      <br />
      <label>Your Description here:</label>
      <input type="text" onChange={props.handleSaveDescription} />
      <button onClick={props.postData}>Validate</button>
    </div>
  );
}

export default PutJob;

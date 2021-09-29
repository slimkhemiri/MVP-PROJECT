import React from "react";

function Signup(props) {
  console.log(props);
  return (
    <div>
      <label>Your Name here :</label>
      <input
        type="text"
        placeholder="Put Your Name Here..."
        onChange={props.handleSaveName}
      />
      <br />
      <label>Your E-mail here :</label>
      <input
        type="text"
        placeholder="Put Your E-mail Here..."
        onChange={props.handleSaveEmail}
      />
      <br />
      <label>Your Password here:</label>
      <input type="password" onChange={props.handleSavePass} />
      <br />
      <button onClick={props.sendData}>Connect</button>
    </div>
  );
}

export default Signup;

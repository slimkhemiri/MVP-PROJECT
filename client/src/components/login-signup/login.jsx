import React from "react";

function Login(props) {
  
  return (
    <div>
      <label>Your Name :</label>
      <input
        type="text"
        placeholder="Put Your Name Here..."
        onChange={props.handleSaveName}
      />

      <br />
      <label>Your Password :</label>
      <input type="password" onChange={props.handleSavePass} />
      <br />
      <button onClick={props.checkData}>LogIn</button>
    </div>
  );
}

export default Login;

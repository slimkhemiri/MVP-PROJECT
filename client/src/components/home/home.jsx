import React from "react";
import "../../css/home.css";
function Home(props) {
  return (
    <div>
      <button className="home" onClick={props.handleClickField}>
        Architecture
      </button>
      <button className="home" onClick={props.handleClickField}>
        Arts
      </button>
      <button className="home" onClick={props.handleClickField}>
        administration
      </button>
      <button className="home" onClick={props.handleClickField}>
        Communications
      </button>
      <button className="home" onClick={props.handleClickField}>
        Education
      </button>
      <button className="home" onClick={props.handleClickField}>
        technology
      </button>
      <button className="home" onClick={props.handleClickField}>
        Maintenance
      </button>
      <button className="home" onClick={props.handleClickField}>
        Sales
      </button>
    </div>
  );
}

export default Home;

import React from "react";
import "../../css/home.css";
function Home(props) {
  console.log(props);
  return (
    <div>
      <input type="date" />
      <input type="text" placeholder="search here..." />
      <button>Search</button>
      <br />
      <button className="home">Architecture</button>
      <button className="home">Arts</button>
      <button className="home">administration</button>
      <button className="home">Communications</button>
      <button className="home">Education</button>
      <button className="home">technology</button>
      <button className="home">Maintenance</button>
      <button className="home">Sales</button>
    </div>
  );
}

export default Home;

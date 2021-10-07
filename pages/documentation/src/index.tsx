import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

//@ts-ignore
import data from "/package-data.json";

console.log(data)

const imgUrl = new URL('./assets/600x600.png', import.meta.url).href

const App = () => {
    return <div className="vh-100 d-flex flex-column overflow-hidden container">
      <div className="d-flex flex-shrink-0 flex-row p-3 bg-primary">
        <img src={imgUrl} className="me-3" style={{ height: 50, width: 50 }} />
        <h1>Fn Repeats</h1>
      </div>
      <div className="d-flex flex-shrink-0 flex-row p-3" style={{ backgroundColor: "var(--bs-white)"}}>

      <p>Hello!</p>
      </div>
    </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
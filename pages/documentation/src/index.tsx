import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

//@ts-ignore
import data from "/package-data.json";

console.log(data)

const App = () => {
    return <div>
      <p>Hello!</p>
    </div>
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("app"));
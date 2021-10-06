import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

//@ts-ignore
import data from "/package-data.json";

console.log(data)

const imgUrl = new URL('./assets/600x600.png', import.meta.url).href

const App = () => {
    return <div>
      <img src={imgUrl} />
      <p>Hello!</p>
    </div>
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("app"));
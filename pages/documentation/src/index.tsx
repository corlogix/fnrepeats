import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DataProvider from './components/DataProvider';
import Router from "./routing";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faSearch
)

import "./index.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./components/Search";

const imgUrl = new URL('./assets/600x600.png', import.meta.url).href

const App = () => {
    return (
      <DataProvider>
        <div className="vh-100 d-flex flex-column overflow-hidden">
          <div className="d-flex flex-shrink-0 flex-row p-3 align-items-center justify-content-between">
            <div className="d-flex">
              <img src={imgUrl} className="me-3" style={{ height: 40, width: 40 }} />
              <h2 className="pt-1">Fn Repeats</h2>
            </div>
            <div className="d-flex">
              {location.pathname === '/fnrepeats/' && <Search style={{ minWidth: 200, maxWidth: 200 }} />}
            </div>
          </div>
          <div className="d-flex flex-row">
            <Router />
          </div>
        </div>
    </DataProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/fnrepeats">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
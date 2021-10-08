import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Aside from './components/Aside';
import DataProvider from './components/DataProvider';
import Search from './components/Search';

import "./index.scss";

const imgUrl = new URL('./assets/600x600.png', import.meta.url).href

const App = () => {
    return (
      <DataProvider>
        <div className="vh-100 d-flex flex-column overflow-hidden">
          <div className="d-flex flex-shrink-0 flex-row p-3 align-items-center">
            <img src={imgUrl} className="me-3" style={{ height: 40, width: 40 }} />
            <h2 className="pt-1">Fn Repeats</h2>
          </div>
          <div className="homebanner d-flex flex-shrink-0 flex-row p-3">
            <Search />
          </div>
          <div className="d-flex flex-shrink-0 flex-row p-3">
          <Aside />
          <p>Hello!</p>
          <Routes>
            
          </Routes>
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
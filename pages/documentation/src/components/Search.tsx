import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { InputHTMLAttributes, useState } from "react";
import { useData } from './DataProvider';

import "./Search.scss";

type BaseChangeType = InputHTMLAttributes<any>["onChange"];

export default function Search({ style = {} }) {
  const { searchData } = useData();
  const [items, setItems] = useState<ReturnType<typeof searchData>>([] as any);

  const onChange: BaseChangeType =  (e) => {
    e.preventDefault();
    const value = e?.target?.value;
    setItems(searchData(value));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e?.target[0].value;
    console.log(value, e)
  }

  return (
    <form className="search-form" target="none" onSubmit={onSubmit} style={style}>
      <input className="search" placeholder="Search the docs..." onChange={onChange} />
      <div className="search-icon"><FontAwesomeIcon icon="search" /></div>
    </form>
  )
}
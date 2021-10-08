import React, { InputHTMLAttributes, useState } from "react";
import { useData } from './DataProvider';

type BaseChangeType = InputHTMLAttributes<any>["onChange"];

export default function Search() {
  const { searchData } = useData();
  const [items, setItems] = useState<ReturnType<typeof searchData>>([] as any);

  const onChange: BaseChangeType =  (e) => {
    const value = e?.target?.value;
    setItems(searchData(value));
  }

  return <input className="search" onChange={onChange} />
}
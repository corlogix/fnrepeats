import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import Fuse from 'fuse.js'

type DataContextType = {
  data: {
    fileName: string;
    jsDoc: Record<string, {
      description: string;
      name: string;
      optional: boolean;
      type: string;
      tag: string;
      value: any;
    }>
  }[];
  categories: string[];
  searchData: (value: string) => { item: DataContextType["data"], matches: { key, value }[]};
}

const DataContext = createContext<DataContextType>(null);
const { Provider } = DataContext; 

//@ts-ignore
import data from "../package-data.json";
console.log(data);

export default function DataProvider({children}) {
  const fuse = useRef(new Fuse(data, {
    includeScore: true,
    includeMatches: true,
    keys: [
      'fileName',
      'jsDoc.description.value',
      'jsDoc.category.value',
    ]
  }));

  const searchData = useCallback((value: string = '') => {
    return fuse.current.search(value) as any;
  }, []);

  const categories = useMemo(() => {
    return [...new Set(data.map(x => x.jsDoc["category"].value))]
  }, [])

  return (
    <Provider value={{data: data as any, categories, searchData}}>
      {children}
    </Provider>
  )
}

export function useData() {
  return useContext(DataContext);
}
import { useData } from './DataProvider';

export default function Aside() {
  const { categories } = useData();

  return (
    <div className="d-flex flex-column p-3" style={{ overflowY: "scroll", minWidth: 300 }}>
      {categories.map(cat => <h4>{cat}</h4>)}
    </div>
  )
}
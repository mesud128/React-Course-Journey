import { useState } from "react";

export default function Dish({ name, price, onAdd }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onAdd(price);
  };

  return (
    <div className="dish-card">
      <h3>{name} - {price} ETB</h3>
      <button onClick={handleAdd}>Add ({count})</button>
    </div>
  );
}
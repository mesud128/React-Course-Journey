import { useState } from "react";
import { dishes } from "./data";
import Dish from "./Dish";
import CategoryBar from "./CategoryBar";
import OrderForm from "./OrderForm";

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const filtered = category === "All"
    ? dishes
    : dishes.filter(d => d.category === category);

  return (
    <div>
      <h1>Order Total: {total} ETB</h1>
      <CategoryBar
        categories={["All", "Main", "Drink"]}
        selected={category}
        onSelect={setCategory}
      />

      {filtered.length > 0 ? (
        filtered.map(d => (
          <Dish key={d.id} {...d} onAdd={(price) => setTotal(total + price)} />
        ))
      ) : (
        <p>No dishes in this category.</p>
      )}

      <OrderForm />
    </div>
  );
}
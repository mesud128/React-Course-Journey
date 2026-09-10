// src/Menu.jsx
import MenuItem from "./MenuItem";

const menuData = [
  { id: 1, name: "Buna", price: 80, description: "Traditional Ethiopian coffee", category: "Drink" },
  { id: 2, name: "Shiro", price: 150, description: "Traditional Ethiopian chickpea stew", category: "Main" },
  { id: 3, name: "Tibs", price: 250, description: "Sautéed beef with vegetables", category: "Main" },
  { id: 4, name: "Firfir", price: 180, description: "Spiced shredded injera", category: "Breakfast" },
  { id: 5, name: "Baklava", price: 120, description: "Sweet pastry with nuts", category: "Dessert" },
];

function Menu() {
  return (
    <section className="menu-container">
      <h2 className="section-title">OUR MENU</h2>
      <div className="menu-grid">
        {menuData.map((item) => (
          <MenuItem
            key={item.id} // Essential for React performance
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
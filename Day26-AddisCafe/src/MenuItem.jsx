// src/MenuItem.jsx
function MenuItem({ name, price, description, category }) {
  return (
    <div className="menu-card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className="category-tag">{category}</span>
      </div>
      <p className="description">{description}</p>
      {/* Practice JSX Expressions: Price with tax (15%) */}
      <div className="price-tag">
        <span className="base-price">{price} ETB</span>
        <span className="tax-info">Inc. Tax: {price * 1.15} ETB</span>
      </div>
    </div>
  );
}

export default MenuItem;
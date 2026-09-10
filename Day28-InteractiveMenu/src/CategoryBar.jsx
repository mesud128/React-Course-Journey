export default function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div>
      {categories.map(cat => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
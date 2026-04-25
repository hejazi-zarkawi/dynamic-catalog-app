import ItemCard from "./ItemCard";

function CategorySection({ category, items }) {
  return (
    <div className="category-section">
      <h2>{category} ({items.length})</h2>

      <div className="item-grid">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
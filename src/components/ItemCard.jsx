import { useNavigate } from "react-router-dom";

function ItemCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="item-card"
      onClick={() => navigate(`/details/${item.id}`)}
    >
      <img src={item.image} alt={item.itemname} onError={(e) => {
    e.target.src = "https://via.placeholder.com/300";
  }} />
      <h3>{item.itemname}</h3>
    </div>
  );
}

export default ItemCard;
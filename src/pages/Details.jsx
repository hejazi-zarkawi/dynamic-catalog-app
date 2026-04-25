import { useParams } from "react-router-dom";
import data from "../data/data.json";
import "../styles/details.css";
import { useNavigate } from "react-router-dom";



function Details() {

    const navigate = useNavigate();
  const { id } = useParams();

  const item = data[Number(id)];

  if (!item) return <h2>Item not found</h2>;

  return (

    <>

    <div className="details">

        <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>
  <div className="details-container">
    
    <div className="image-container">
      <img src={item.image} alt={item.itemname} />
    </div>

    <div className="details-content">
      <h2>{item.itemname}</h2>
      <p className="category">{item.category}</p>

      <div className="props">
        {item.itemprops.map((prop, index) => (
          <div key={index} className="prop-item">
            <span className="prop-label">{prop.label}</span>
            <span className="prop-value">{prop.value}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

</>
  );
}

export default Details;
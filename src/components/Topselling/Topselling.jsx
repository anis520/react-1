import "./Topselling.css";
import { FaEye } from "react-icons/fa";
import allProducts from "../Faker/Faker";
import { Link } from "react-router-dom";
const alldata = allProducts.filter((word) => word.rating == 5);

function Topselling() {
  return (
    <div className="topsell" id="top">
      <p>Top selling products</p>
      <h6>Veiw all</h6>

      <div className="rows">
        {alldata.map((a) => (
          <Link to={`/single/${a.id}`}>
                  <div>
            <img src={a.img} alt="" />
            <p className="name">{a.name}</p>
            <p>{a.price} BDT</p>
            <FaEye className="icon"></FaEye>
          </div>
          </Link>
  
        ))}
 
      </div>
    </div>
  );
}

export default Topselling;

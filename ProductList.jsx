import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 200 },
  { id: 2, name: "Snake Plant", price: 300 },
  { id: 3, name: "Money Plant", price: 250 },
  { id: 4, name: "Peace Lily", price: 350 },
  { id: 5, name: "Bonsai", price: 500 },
  { id: 6, name: "Cactus", price: 150 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

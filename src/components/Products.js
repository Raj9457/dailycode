import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";

const products = [
  { id: 1, name: "Product 1", price: 10, quantity: 1 },
  { id: 2, name: "Product 2", price: 20, quantity: 1 },
  { id: 3, name: "Product 3", price: 30, quantity: 1 },
];

const Products = () => {
  const dispatch = useDispatch();
  const handleAddToCArt = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.price}>
          <h3>{product.name}</h3>
          <p>Price:{product.price}</p>
          <button onClick={() => handleAddToCArt(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

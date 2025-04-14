import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCArt,
  updateQuantity,
} from "../redux/cart/cartActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCArt(id));
  };
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity(id, quantity));
    } else {
      alert("Quantity should be greater than 0");
    }
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length == 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>
              Quantity:
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;

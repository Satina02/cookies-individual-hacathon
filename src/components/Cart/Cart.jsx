import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";
import './Cart.css';
import { Link } from "react-router-dom";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="cart-container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={
          <div style={{display:"flex", justifyContent:"space-between"}}>
        <h2 style={{color:"white"}}>Total: {cart?.totalPrice}$</h2>
        <Link to="/check-out" className="checkout-btn">
          <button className="cart-btn">PROCEED TO CHECKOUT</button>
        </Link>
        </div>
      }
        renderItem={(item) => <CartItem item={item} />}
      />
    </div>
  );
};

export default Cart;

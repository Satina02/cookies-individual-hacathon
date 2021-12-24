import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { wishContext } from "../../contexts/wishContext";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToWish, checkItemInWish } = useContext(wishContext);
  const [checkInWish, setCheckInWish] = useState(checkItemInWish(item.id));
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id))
  })
  return (
    <Card
      hoverable
      key={item.id}
      style={{ width: "240px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        <img 
        onClick={() => {
          addProductToWish(item);
          setCheckInWish(checkItemInWish(item.id))
        }}
        style={{width:"30px", marginLeft:"15px"}} 
        src="https://cdn3.iconfinder.com/data/icons/vol-3/128/heart-256.png" alt="" />,
        <ShoppingCartOutlined
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link to={`/products/${item.id}`}>
          <EllipsisOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
        </Link>,
      ]}
    >
      <Card.Meta
        title={item.brand}
        description={
          <>
            {/* <h3>{item.model}</h3> */}
            <h4>{"$" + item.price}</h4>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;

import React, { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { cartContext } from "../../contexts/cartContext";
import './CartItem.css';

const CartItem = ({ item }) => {
  // console.log(item);
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  return (
    <List.Item
      key={item.id}
      className="cart-item-container"
      extra={<img width={202} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta
        title={
          <div
            
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h5 style={{color:"white"}}>{item.item.brand}</h5>
              {/* <h4>{item.item.model}</h4> */}
            </div>
            <h5 style={{color:"white"}}>{"$" + item.item.price}</h5>
          </div>
        }
        description={
          <>
            {/* <div>{item.item.description}</div> */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
              <div>
                <h5 style={{color:"white"}}>Quantity</h5>
                
                  <img onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  } style={{width:"50px"}} src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Minus_02-256.png" alt="" />
                  
                <InputNumber value={item.count} disabled />
                {/* <Button
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                  
                >
                  +
                </Button> */}
                <img onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  } style={{width:"50px"}} src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Plus_01-66-256.png" alt="" />
                  
              </div>
              <div>
                <h4 style={{color:"white"}}>SubPrice</h4>
                <h4 style={{color:"white"}}>{"$" + item.subPrice}</h4>
              </div>
            </div>
            {/* <Button onClick={() => deleteFromCart(item.item.id)}> */}
              <img onClick={() => deleteFromCart(item.item.id)} style={{width:"60px"}} src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Remove_02-256.png" alt="" />
            {/* </Button> */}
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;

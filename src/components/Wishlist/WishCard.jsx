import React, { useContext, useEffect } from "react";
// import { List } from "antd";
import { List, Button } from "antd";
import { wishContext } from "../../contexts/wishContext";

const WishCard = ({item}) => {
    const {deleteFromWish} = useContext(wishContext)
    return (
        <div>
          {/* wish  */}
            {/* <List.Item
      key={item.id}
      style={{border:"1px solid gray", marginBottom:"10px", width:"50%"}}
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
            </div>
            <h5 style={{color:"white"}}>{"$" + item.item.price}</h5>
          </div>
        }
        description={
          <>
              <img onClick={() => deleteFromWish(item.item.id)} style={{width:"50px"}} src="https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-06-256.png" alt="" />
          </>
        }
      />
    </List.Item> */}
    <div>
           <List.Item
                key={item.id}
                extra={
                    <img
                    style={{width:"250px", height:"200px"}}
                    width={272}
                    alt="image"
                    src={item.item.image1}
                    />
                }
            >
           <List.Item.Meta
                title={
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div><h3>{item.item.brand} </h3>
                    {/* <h4>{item.item.ingredients}</h4> */}
                    </div>
                    <h3>{"$" + item.item.price}</h3>
                    </div>}
                description={
                    < div style={{display:"flex"}}>
                    <Button danger style={{marginRight:"40px"}} onClick={() => deleteFromWish(item.item.id)}>Remove from Wish</Button>
                    {/* <Button onClick={() => addProductToCart(item)}>Add to Cart</Button> */}
                    </div>
                } 
            />
            </List.Item>
        </div>
        </div>
    );
};

export default WishCard;
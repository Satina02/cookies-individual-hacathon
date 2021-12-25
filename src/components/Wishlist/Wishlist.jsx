import React, { useContext, useEffect } from 'react';
import { List } from "antd";
import WishCard from './WishCard';
import { wishContext } from '../../contexts/wishContext';

const Wishlist = () => {
    const {getWish, wish} = useContext(wishContext)
    useEffect(() => {
        getWish();
      }, []);
      console.log(wish);
    return (
        <div>
            <div className="cart-container">
            
      <div>
            <section style={{marginBottom:"50px"}}>
                <div style={{marginLeft:"50px"}}>
                    <h1 className="shopping-cart" style={{fontSize:"42px", fontWeight:"700", marginLeft:"50px", 
                             width:"1000px"}}> 
                        My favorite
                    </h1>
                </div>
                <List style={{marginLeft:"70px", marginRight:"170px"}}
                    itemLayout="vertical"
                    size="large"
                    dataSource={wish?.products}
                    renderItem={(item) => <WishCard item={item} />}
                />
            </section>
        </div>
    </div>
        </div>
    );
};

export default Wishlist;
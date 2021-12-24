import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from "antd";
import { Rate } from 'antd';

import { productsContext } from "../../contexts/productsContext";
import "./Detail.css";
import Reviews from "../Reviews/Reviews";

const DetailsProduct = () => {
  const [showReviews, setShowReviews] = useState(false);
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null); 
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <div className="detail-container">
      { product? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw" }}>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                </div>
            </div>
            <div style={{ width: "40vw" }}>
              <h2 style={{color:"white"}}>{product.brand}</h2>
              <h2 style={{color:"white"}}>{"$" + product.price}</h2>
              <Rate />
              <div style={{color:"white", fontSize:"17px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
              <Button
                  className="btn"
                  size="large"
                  style={{
                    margin: "15px",
                    marginLeft: "-1px",
                    width: "40%",
                    border: "2px solid rgb(11, 139, 135)",
                    color: "#fff",
                    background: "rgb(11, 139, 135)",
                  }}
                >
                  ADD TO CART
                </Button>
                <Button
                  className="btn"
                  size="large"
                  style={{
                    margin: "15px",
                    width: "40%",
                    border: "2px solid rgb(11, 139, 135)",
                    color: "#fff",
                    background: "rgb(11, 139, 135)",
                  }}
                >
                  MY FAVORITE
                </Button>
                <br />
                <span style={{color:"white"}}>SKU: 009</span>
                <br />
                <span style={{color:"white"}}>Category: Uncategorized</span>
                <br />
                <div style={{ cursor: "pointer" }}
                   onClick={() => setShowReviews(!showReviews)}>
                {showReviews ?  <button style={{
                    margin: "15px",
                    width: "40%",
                    height:"47px",
                    border: "2px solid rgb(11, 139, 135)",
                    color: "#fff",
                    background: "rgb(11, 139, 135)",
                  }}>Reviews</button> : <button style={{
                    margin: "15px",
                    width: "40%",
                    height:"47px",
                    border: "2px solid rgb(11, 139, 135)",
                    color: "#fff",
                    background: "rgb(11, 139, 135)",
                  }}>Reviews</button>}
                </div>
                {
                    showReviews ? (
                      <Reviews/>
                    ) : null
                  }
                
            </div>
            <div>
                
              </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;

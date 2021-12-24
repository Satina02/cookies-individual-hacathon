import React, { useReducer } from "react";

import { CASE_GET_WISH } from "../helpers/cases";

export const wishContext = React.createContext();

const INIT_STATE = {
  wish: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CASE_GET_WISH:
        return {
          ...state,
          wish: action.payload,
        };
      default:
        return state;
    }
  };

  const WishContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    function addProductToWish(product) {
      let wish = JSON.parse(localStorage.getItem("wish"));
      if (!wish) {
        wish = {
          products: [],
        };
      }
      let newProduct = {
        item: product,
        count: 1,
      };
      let filteredWish = wish.products.filter(
        (item) => item.item.id === product.id
      );
      if (filteredWish.length > 0) {
        wish.products = wish.products.filter(
          (item) => item.item.id !== product.id
        );
      } else {
        wish.products.push(newProduct);
      }
      localStorage.setItem("wish", JSON.stringify(wish));
      getWish()
    }
    function getWish() {
      let wish = JSON.parse(localStorage.getItem("wish"));
      if (!wish) {
        wish = {
          products: [],
        };
      }
      dispatch({
        type: CASE_GET_WISH,
        payload: wish,
      });
    }
    function deleteFromWish(id) {
      let wish = JSON.parse(localStorage.getItem("wish"));
      if (!wish) {
        wish = {
          products: [],
        };
      }
      wish.products = wish.products.filter((item) => item.item.id !== id);
      localStorage.setItem("wish", JSON.stringify(wish));
      getWish();
    }
  
    function checkItemInWish(id) {
      let wish = JSON.parse(localStorage.getItem("wish"));
      if (!wish) {
        wish = {
          products: [],
        };
      }
      let filteredWish = wish.products.filter((item) => item.item.id === id);
      return filteredWish.length > 0 ? true : false;
    }
    return (
      <wishContext.Provider
        value={{
          wish: state.wish,
          addProductToWish,
          getWish,
          deleteFromWish,
          checkItemInWish,
        }}
      >
        {children}
      </wishContext.Provider>
    );
  };
  
  export default WishContextProvider;
import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
// import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/cartContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 
import WishContextProvider from "./contexts/wishContext";
import CommentsContextProvider from "./contexts/commentContext";

const App = () => {
  return (
    <AuthContextProvider> 
      <CommentsContextProvider>
      <CartContextProvider>
        <WishContextProvider>
        {/* <BrandsContextProvider> */}
          <ProductsContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        {/* </BrandsContextProvider> */}
        </WishContextProvider>
      </CartContextProvider>
      </CommentsContextProvider>
    </AuthContextProvider>
  );
};

export default App;


/*
CRUD
фильтрация
пагинация
поиск
корзина
роутинг
админка
*/
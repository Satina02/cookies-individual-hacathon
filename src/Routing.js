import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";

import Auth from "./components/Auth/Auth";
import BrandsList from "./components/BrandsList/BrandsList";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Flavor from "./components/Flavor/Flavor";
import Home from "./components/Home/Home";
import CheckOut from "./components/Payment/CheckOut";
import Payment from "./components/Payment/Payment";
import ProductsList from "./components/ProductsList/ProductsList";
import Watch from "./components/Watch/Watch";
import Wishlist from "./components/Wishlist/Wishlist";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/brands",
      element: <BrandsList />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6
    },
    {
      link: "/flavor",
      element: <Flavor/>,
      id:7
    },{
      link:"/contacts",
      element: <Contacts/>,
      id:8
    },
    {
      link: "/wish",
      element: <Wishlist/>,
      id: 9
    },{
      link: "/about",
      element: <AboutUs/>,
      id:10
    },
    {
      link: "/check-out",
      element: <CheckOut/>
    },
    {
      link: "/payment",
      element: <Payment/>
    },
    {
      link: "/watch-history",
      element: <Watch/>
    }
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {/* { user ? */}
       
       {ADMIN_ROUTES.map((item) => 
            (<Route
          path={item.link}
          element={
              item.element
          }
             />))
        }
        

      {/* // )): null} */}
      // <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;

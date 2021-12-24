import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { Menu, Dropdown } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const NAV_ITEMS = [
    {
      title: <img className="navbar-icons" src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Home-256.png" alt="" />,
      link: "/",
      id: 1,
    },
    {
      title: <img className="navbar-icons"  src="https://cdn3.iconfinder.com/data/icons/vol-5/128/shop-256.png" alt="" />,
      link: "/products",
      id: 2,
    },
    {
      title: <img className="navbar-icons"  src="https://cdn0.iconfinder.com/data/icons/seo-and-marketing-volume-3/256/111-256.png" alt="" />,
      link: "about",
      id: 3,
    },
    {
      title: <img className="navbar-icons"  src="https://cdn2.iconfinder.com/data/icons/food-and-drinks-flat-circle-shadow-vol-3/100/fruit__kiwi__food__eat__flavor__half__fresh-256.png" alt="" />,
      link: "flavor",
      id: 4,
    },
    {
      title: <img className="navbar-icons"  src="https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo2-18-256.png" alt="" />,
      link: "contacts",
      id: 5,
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/products">Shop</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/flavor">Flavor</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/cart">Cart</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/wish">WishList</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/watch-history">History</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header-cont">
      <div className="header">
        <div></div>
        <Link to="/">
          <img className="header-logo-img" src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/sidearea-image.png" alt="" />
          <img className="header-logo-text"
          
            src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/logo.png"
            alt=""
          />
        </Link>
        <div className="header-main-icons">
              
              {NAV_ITEMS.map((item) => (
              <Link
                to={item.link}
                className={
                  location.pathname === item.link
                    ? "navbar__item-active"
                    : "navbar__item"
                }
              >
                {item.title}
              </Link>
            ))}

            {email === "talaibekova_s@iuca.kg" ? (
              <Link
                className={
                  location.pathname === "/admin"
                    ? "navbar__item-active"
                    : "navbar__item"
                }
                to="/admin"
              >
                ADMIN
              </Link>
            ) : null}
            <Link to="/cart">
                <Badge count={+cartLength} style={{backgroundColor:"green"}}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px", cursor: "pointer" }}
                  />
                </Badge>
              </Link>
              <Link to="/wish">
              <img style={{width:"35px", marginLeft:"25px"}} src="https://cdn1.iconfinder.com/data/icons/creativity-and-design-hexagone/128/16-256.png" alt="" />
              </Link>
              <Link to="/watch-history">
              <img style={{width:"35px", marginLeft:"25px"}} src="https://cdn0.iconfinder.com/data/icons/luchesa/128/eye-256.png" alt="" />
              </Link>
        </div>
        <div style={{display:"flex"}}>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Login</button>
            </Link>
          )}
          <Dropdown className="menu-droptown" overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <MenuOutlined style={{color: "black", fontSize: "20px", marginLeft: "17px"}}/>
          </a>
        </Dropdown>
        </div>
      </div>
      {/* <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

        {email === "talaibekova_s@iuca.kg" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
      </div> */}
    </div>
  );
};

export default Header;

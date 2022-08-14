import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import Logo from "../../.././assets/logo/logo.svg";
import "./Navigation.scss";
import { BsList } from "react-icons/bs";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Navigation = (props) => {
  const { ismobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <div className="navigation">
        {ismobile && openMenu ? (
          <div className="navigation-icon">
            <IoMdClose style={{ fontSize: "3rem" }} onClick={handleMenu} />
          </div>
        ) : !openMenu && ismobile ? (
          <div className="navigation-icon">
            <BsList style={{ fontSize: "3rem" }} onClick={handleMenu} />
          </div>
        ) : (
          <ul className="navigation__menu">
            <li className="menu-title">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li className="menu-title">
              <Link
                to="/Catalogue"
                style={{ textDecoration: "none", color: "black" }}
              >
                Catalogue
              </Link>
            </li>
            <li className="menu-title">
              <Link
                to="/About"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
            <li className="menu-title">
              <Link
                to="/Blog"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blog
              </Link>
            </li>
            <li className="menu-title menu__list">
              <Link
                to="/Info"
                style={{ textDecoration: "none", color: "black" }}
              >
                Info
              </Link>

              <ul className="list__item">
                <li className="list__item--font">Concat</li>
                <li className="list__item--font">Size guide</li>
                <li className="list__item--font">Payment</li>
                <li className="list__item--font">Delivery</li>
                <li className="list__item--font">Order tracking</li>
                <li className="list__item--font">Exchanges & returns</li>
                <li className="list__item--font">Sitemap</li>
                <li className="list__item--font">404 error page</li>
                <li className="list__item--font">Demo design system</li>
              </ul>
            </li>
          </ul>
        )}
        {openMenu && (
          <ul className="openMenu">
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li>
            <Link
            to="/Catalogue"
            style={{ textDecoration: "none", color: "black" }}
          >
            Catalogue
          </Link>
            </li>
            <li>
            <Link
            to="/About"
            style={{ textDecoration: "none", color: "black" }}
          >
            About
          </Link>
            </li>
            <li>
            <Link
            to="/Blog"
            style={{ textDecoration: "none", color: "black" }}
          >
            Blog
          </Link>
            </li>
            <li>
            <Link
            to="/Info"
            style={{ textDecoration: "none", color: "black" }}
          >
            Info
          </Link>
            </li>
          </ul>
        )}

        <div className="navigation__logo">
          <img src={Logo} alt="Logo" width="150px" height="32.48px" />
        </div>
        <div className="navigation__icon">
          <FiSearch />
          <Link to="/Account"  style={{ textDecoration: "none", color: "black" }}><span>
          <FiUser />
        </span></Link>

        <Link to="/Cart"  style={{ textDecoration: "none", color: "black" }}><FiShoppingBag /></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navigation;

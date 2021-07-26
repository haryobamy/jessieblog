import React from "react";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navWrapper">
          <div className="navLeft">
            <input type="text" className="searchInput" />
            <FaIcon.FaSearch />
          </div>
          <div className="navCenter">
            <Link className="links" to='/'>Home</Link>
            <Link className="links" to="/feature">Features</Link>
            <Link className="links" to='travel'>Travel</Link>
            <Link className="links" to='pages'>Pages</Link>
            <Link className="links" to='shop'>Shop</Link>
            <Link className="links" to='about'>About</Link>
            <Link className="links" to='contact'>Contact</Link>
          </div>

          <div className="navRight">
            <div className="cart">
              <FaIcon.FaShoppingCart className="icon" />

              <div className="cartItems">
                <span>bag</span>
                <span>shoes</span>
                <span>plate</span>
                <span>phone</span>
              </div>
            </div>
            <div className="bars">
              <FaIcon.FaBars className="icon" />
              <div className="iconsMenu">
                <span>more menu</span>
                <span>more links</span>
                <span>more menu</span>
                <span>more menu</span>
              </div>
            </div>
          </div>
          <div className="mobileNavRight">
            <div className="mobileBars">
              <FaIcon.FaBars className="icon" />
              <div className="iconsMenu">
                <Link className="links" to='/'>Home</Link>
                <Link className="links" to="/feature">Features</Link>
                <Link className="links" to='travel'>Travel</Link>
                <Link className="links" to='pages'>Pages</Link>
                <Link className="links" to='shop'>Shop</Link>
                <Link className="links" to='about'>About</Link>
                <Link className="links" to='contact'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


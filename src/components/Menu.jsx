import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <div className="navbar__burger" open={open} onClick={() => setOpen(!open)}>
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
      </div>
      <div
        className={open ? "menu-container open1" : "menu-container"}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/">
            Home
          </Link>
        </li>
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/contact">
            Contact
          </Link>
        </li>
      </div>
      {/*  */}
    </>
  );
};

export default Menu;

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="/logo-color.png" alt="Kuizz Logo" />
      </Link>
      <Link to="/" className="title">
        Kuizz
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;

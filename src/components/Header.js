import React from "react";
import Link from "./Link";
import "./Header.css";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="header item">
        Accordion Menu
      </Link>
      <Link href="/list" className="header item">
        Wiki API Search
      </Link>
      <Link href="/translate" className="header item">
        Google API Translate
      </Link>
      <Link href="/dropdown" className="header item">
        Dropdown Menu
      </Link>
    </div>
  );
};

export default Header;

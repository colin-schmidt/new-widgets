import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion Menu
      </Link>
      <Link href="/list" className="item">
        Wiki API Search
      </Link>
      <Link href="/translate" className="item">
        Google API Translate
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown Menu
      </Link>
    </div>
  );
};

export default Header;

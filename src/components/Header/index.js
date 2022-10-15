import Drawer from "./Drawer";
import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";
// import Search from "../DashboardComponents/Search";

function Header() {

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const [search, setSearch] = useState(true)
  const handleSearch = () => {
    console.log(search)
    if(search)
      setSearch(false)
    else
    setSearch(true)
  }
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
      {/* {search && <Search handleChange={handleChange} onClick={handleSearch} />} */}
      <div className="links-flex">
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/dashboard"> 
          <p className="links">Search</p>
        </a>
        <a href="/about-us">
          <p className="links">About Us</p>
        </a>
        <a href="/dashboard">
          <p className="links">
            <Button text="Dashboard" />
          </p>
        </a>
      </div>
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
  );
}

export default Header;

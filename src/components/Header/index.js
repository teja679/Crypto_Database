import Drawer from "./Drawer";
import React, { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import BlueBall from "../BlueBall/BlueBall";
// import Search from "../DashboardComponents/Search";

function Header() {
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
          CryptoTracker
          <BlueBall />
          {/* <div style={{ color: "var(--blue)" }}>.</div> */}
        </h1>
      </a>
      {/* {search ? <Search handleChange={handleChange}  /> : <></>} */}
      <div className="links-flex">
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/dashboard" > 
          <p className="links">Search</p>
        </a>
        <a href="/about-us">
          <p className="links">About Us</p>
        </a>
        <a href="/dashboard">
          <p className="links">
            <Button text="Dashboard" className={'button'}  />
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

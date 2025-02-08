import React from "react";
import "./header.css";
import { evangadiLogo } from "../../assets/imgAssets";

export default function Header() {
  return (
    <header className="outer_container">
      <div className="inner_container">
        <div className="logo-container">
          <a href="/">
            <img
              src={evangadiLogo}
              // src="https://66cf6e20751318039e6352ff--peaceful-dragon-75676e.netlify.app/assets/evangadi-logo-home-D98Zk6nH.png"
              alt="Evangadi Logo"
            />
          </a>
        </div>
        <div>
          <nav className="nav-container">
            <ul className="nav-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="divider" />
              <li>
                <a href="/how-it-works">How it Works</a>
              </li>
              <li className="divider" />
            </ul>

            <div>
              <a href="/login">
                <button className="button-container">SIGN IN</button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

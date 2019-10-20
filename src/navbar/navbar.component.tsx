import React from "react";
import logo from "../../assets/img/logo.png";
import { navbarLinks } from "./navbar-links";
import { Link } from "react-router-dom";
import styles from "./navbar.component.css";
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <img
          // @ts-ignore
          width="250"
          src={logo}
          className={styles.logo}
          alt="Developer Circles Eldoret Logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto">
          {navbarLinks.map((link, index) => {
            return (
              <li className="nav-item" key={link.url}>
                <Link className="nav-link" to={link.url}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../UI/Logo";
import PagesDropdown from "../UI/PagesDropdown";
import LanguagesDropdown from "../UI/LanguagesDropdown";

import styles from "./Navbar.module.css";
function Navbar(props) {
  return (
    <nav className={`${styles.nav} ${props.className}`}>
      <Logo className={styles["logo-display"]} />
      <div className={`${styles["right-side-nav-container"]}`}>
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName={styles["active"]}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" activeClassName={styles["active"]}>
              GAMES
            </NavLink>
          </li>
          <li>
            <NavLink to="/tournaments" activeClassName={styles["active"]}>
              TOURNAMENTS
            </NavLink>
          </li>
          <div className={styles["dropdown-container__nav"]}>
            <li className={styles["d1"]}>
              <PagesDropdown />
            </li>
            <li className={styles["d2"]}>
              <LanguagesDropdown />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

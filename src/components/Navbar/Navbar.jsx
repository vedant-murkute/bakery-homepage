import React from "react";
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={`${styles.link} ${styles.bakeryHome}`} to="/">Sweet Heaven</NavLink>
      <ul className={styles.rightPane}>
        <li>
          <NavLink className={styles.link} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

import React from 'react';
import styles from './Nav.module.css';
import logo from "../../assets/logoRM.png";
import { Link } from "react-router-dom";



const Navbar = () => {

  return (
    <nav className={styles.Navbar}>
      <img className={styles.Logo} src={logo} alt="Rick&Morty logo" />
      <ul className={styles.buttonList}>
        <li>
          <Link to="/home"><button className={styles.NavbarButton}>Home</button></Link>
        </li>
        <li>
        <Link to="/favorites"><button className={styles.NavbarButton}>Favorites</button></Link>
        </li>
        <li>
          <Link to="/About"><button className={styles.NavbarButton}>About</button></Link>
        </li>
        <li>
          <Link to='/'><button className={styles.NavbarButton}>Logout</button></Link>
        </li>
      </ul>


    </nav>
  );
}

export default Navbar;
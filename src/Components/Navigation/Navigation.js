import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import styles from './navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <img className={styles.logo} alt="logo" src={logo} />
    <NavLink className={styles.items} activeStyle={{ color: 'black' }} to="/" exact>Books</NavLink>
    <NavLink className={styles.items} activeStyle={{ color: 'black' }} to="/categories">Categories</NavLink>
  </nav>
);

export default Navigation;

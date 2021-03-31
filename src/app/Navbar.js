import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const number = useSelector(state => state.cart.qty);
  return (
    <nav>
      <section className={styles.navBar}>
        <h1>NO MINERS Shop</h1>

        <div className={styles.navContent}>
          <div className={styles.navLink}>
            <Link to="/">GPUS</Link>
          </div>
          <div className={styles.navLink}>
          <Link to="/cart">CART</Link>
          {number > 0 && number}
          </div>
        </div>
      </section>
    </nav>
  );
};

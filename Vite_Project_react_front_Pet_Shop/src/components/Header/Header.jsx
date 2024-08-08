import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const {items} = useSelector(state => state.cart)

  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header>
      <Link style={{ margin: 0 }} to="/">
        <img src={logo} alt="logo" className={styles.Header_logo} />
      </Link>
      <nav>
        <ul className={styles.Header_navBox}>
          <li className={styles.Header_navBox_hidden}>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/discounted-products">All Sales</Link>
          </li>
        </ul>
      </nav>
      <Link className={styles.Header_cartLink} style={{ margin: 0 }} to="/cart">
      {items.length > 0 && <p className={styles.Header_cartTotalQuantity}>{totalQuantity}</p>}
        <img src={cartIcon} alt="cart" className={styles.Header_cart} />
      </Link>
    </header>
  );
}

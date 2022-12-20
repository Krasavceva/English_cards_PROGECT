import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import styles from "../../assets/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <div className="slogan">
          <Link to="/" className={styles.header__item}>
            THE LITTLE GENIUS WORKSHOP
          </Link>
        </div>
        <div className={styles.menu}>
          <Link to="/" className={styles.header__item}>
            Home
          </Link>
          <Link to="/game" className={styles.header__item}>
            Game
          </Link>
          <Link to="/vocabulary" className={styles.header__item}>
            Vocabulary
          </Link>
          <Link to="/contacts" className={styles.header__item}>
            Contacts
          </Link>
        </div>
      </div>
      <div className={styles.header__logo}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import logo from "../../assets/images/logo1.png";
import styles from "../Footer/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className="footer">
        <img src={logo} className={styles.footer_logo} />
        <div className="footer__contact">
          <p>FlashVocabCards helps you to learn new words easely</p>
          <p>&copy; 2022 Viktoria Krasavceva</p>
        </div>
      </div>
      <div className={styles.footer__menu}>
        <a href="#" className={styles.footer__item}>
          HOME
        </a>
        <a href="#" className={styles.footer__item}>
          CONTACT
        </a>
        <a href="#" className={styles.footer__item}>
          ABOUT
        </a>
        <a href="#" className={styles.footer__item}>
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Footer;

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
          <p className="contact__item">
            &copy;
            <a
              href="https://github.com/Krasavceva"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact__link}
            >
              2022 Victoria Krasavceva
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

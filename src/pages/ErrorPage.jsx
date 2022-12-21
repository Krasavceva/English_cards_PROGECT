import React from "react";
import styles from "../styles/errorPage.module.scss";
import Gif from "../assets/images/giphy.gif";

export default function Error() {
  return (
    <div className={styles.wrapper} id="wrapper">
      <img className={styles.gif} src={Gif} alt="error"></img>
    </div>
  );
}

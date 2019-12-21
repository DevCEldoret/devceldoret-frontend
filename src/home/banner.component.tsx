import React from "react";
import styles from "./banner.component.css";
import bannerImg from "../../assets/img/diversity.png";
import fbLogo from "../../assets/img/icons8-facebook 1.png";

export default function Banner() {
  function goToFbGroup() {
    window.open("https://facebook.com/groups/devceldoret", "_blank");
    return null;
  }
  return (
    <div className={styles.banner}>
      <p className={`text-center text-white ${styles.welcomeText}`}>
        Welcome to Developer Circles Eldoret
      </p>
      <p className={`${styles.welcomeDescription} text-center text-white`}>
        We are community-driven program based in Eldoret sponsored by Facebook
        free to join and open to any developer.
      </p>
      <div className={styles.bannerBtn}>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => goToFbGroup()}
        >
          <img src={fbLogo} className="img-fluid" alt="facebook logo" /> Join
          our Facebook Group
        </button>
      </div>
      <img
        src={bannerImg}
        className={`img-fluid ${styles.bannerImg}`}
        alt="Diversity icon"
      />
    </div>
  );
}

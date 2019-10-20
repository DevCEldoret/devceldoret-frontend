import React from "react";
import styles from "./home.component.css";
import Events from "../events/events.component";
import Opportunities from "../opportunities/opportunities.component";
import { FaFacebook } from "react-icons/fa";

export default function HomeComponent() {
  return (
    <main>
      <div className={styles.banner}>
        <h2 className="text-center text-white">
          Welcome to Developer Circles Eldoret
        </h2>
        <button className={`btn btn-primary btn-lg ${styles.bannerButton}`}>
          <FaFacebook /> Join our Facebook Group
        </button>
      </div>
      <Events></Events>
      <Opportunities></Opportunities>
    </main>
  );
}

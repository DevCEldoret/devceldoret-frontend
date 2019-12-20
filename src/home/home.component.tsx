import React from "react";
import styles from "./home.component.css";
import Events from "../events/events.component";
import Opportunities from "../opportunities/opportunities.component";
import bannerImg from "../../assets/img/diversity.png";
import fbLogo from "../../assets/img/icons8-facebook 1.png";
import Banner from "./banner.component";

export default function HomeComponent() {
  return (
    <main>
      <Banner />
      <div style={{ backgroundColor: "#06eefc", position: "absolute" }}>
        <div className={styles.curveBorderTop}></div>
      </div>
    </main>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Detail/Detail.module.css";
import back from "../../styles/Images/atras.png";

import CountryDetail from "./CountryDetail";
import ActivityDetail from "./ActivityDetail";

function Detail() {
  return (
    <div className={styles.contPag}>
      <div>
        <div className={styles.navBar}>
          <div className={styles.navIzq}>
            <NavLink to="/home">
              <img src={back} alt="back" className={styles.arrowBack}></img>
            </NavLink>
          </div>
        </div>
        <div className={styles.contGral}>
          <div className={styles.cardForm}>
            <CountryDetail />
          </div>
          <div className={styles.cardForm}>
            <ActivityDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

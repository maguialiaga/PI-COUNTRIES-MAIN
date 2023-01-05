import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
//import globe from "../../styles/Gifs/globe.gif";
import globee from "../../styles/Gifs/globe.1.gif";

function LandingPage() {
  return (
    <div className={styles.background}>
      <div className={styles.izquierda}>
        <div className={styles.contTitle}>
          <div className={styles.title}>Take a look at the world...</div>
          <div className={styles.parrafo}>
            Come and see countries from all over the word and create new
            features!
          </div>
        </div>

        <Link to="./home">
          <button className={styles.button}>Start</button>
        </Link>
      </div>

      <div className={styles.derecha}>
        <img src={globee} alt="globe" className={styles.globeImg}></img>
      </div>
    </div>
  );
}

export default LandingPage;

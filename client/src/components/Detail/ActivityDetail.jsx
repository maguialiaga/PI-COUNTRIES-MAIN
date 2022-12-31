import React from "react";
import styles from "../Detail/CountryDetail.module.css";

//faltan estilos

function ActivityDetail({ name, difficulty, duration, season }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.name}>{name}</h3>

      <p className={styles.p}>{difficulty}</p>
      <p className={styles.p}>{duration}</p>
      <p className={styles.p}>{season}</p>
    </section>
  );
}

export default ActivityDetail;

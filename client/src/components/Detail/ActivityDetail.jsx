import React from "react";
import styles from "../Detail/CountryDetail.module.css";

//faltan estilos

function ActivityDetail({ name, difficulty, duration, season }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.name}>{name}</h3>

      <p className={styles.p}>
        <b>Difficulty</b>
        {difficulty}
      </p>
      <p className={styles.p}>
        <b>Duration</b>
        {duration}
      </p>
      <p className={styles.p}>
        <b>Season</b>
        {season}
      </p>
    </section>
  );
}

export default ActivityDetail;

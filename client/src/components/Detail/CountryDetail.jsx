import React from "react";
import styles from "../Detail/CountryDetail.module.css";

//faltan estilos

function CountryDetail({
  name,
  continent,
  id,
  capital,
  subregion,
  area,
  population,
  image,
}) {
  return (
    <section className={styles.section}>
      <img src={image} alt="flag" className={styles.flag}></img>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.info}>
        <p className={styles.p}>{id}</p>
        <p className={styles.p}>{continent}</p>
        <p className={styles.p}>{capital}</p>
        <p className={styles.p}>{subregion}</p>
        <p className={styles.p}>{area}</p>
        <p className={styles.p}>{population}</p>
      </div>
    </section>
  );
}

export default CountryDetail;

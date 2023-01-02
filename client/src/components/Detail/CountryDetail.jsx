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
        <p className={styles.p}>
          <b>#</b>
          {id}
        </p>
        <p className={styles.p}>
          <b>Continent</b>
          {continent}
        </p>
        <p className={styles.p}>
          <b>Capital</b>
          {capital}
        </p>
        <p className={styles.p}>
          <b>SubRegion</b>
          {subregion}
        </p>
        <p className={styles.p}>
          <b>Area</b>
          {area}
        </p>
        <p className={styles.p}>
          <b>Population</b>
          {population}
        </p>
      </div>
    </section>
  );
}

export default CountryDetail;

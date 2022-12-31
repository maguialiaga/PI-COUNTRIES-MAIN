//COMPONENTE PRESENTACIONAL --> dumb component
//Tiene que tener las menos tareas posibles, solamente va a mostrar!
import React from "react";
import styles from "./CountryCard.module.css";
import { Link } from "react-router-dom";

function CountryCard({ name, image, continent, id }) {
  //le hago destructuring de mi objeto de props
  return (
    <Link to={`/home/${id}`} className={styles.card}>
      <div className={styles.cont}>
        <img src={image} alt="img" className={styles.img} />
        <p className={styles.name}>{name}</p>
        <p className={styles.continent}>{continent}</p>
      </div>
    </Link>
  );
}

export default CountryCard;

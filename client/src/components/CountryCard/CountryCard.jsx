//COMPONENTE PRESENTACIONAL --> dumb component
//Tiene que tener las menos tareas posibles, solamente va a mostrar!
import React from "react";
import style from "./CountryCard.module.css";

function CountryCard({ name, image, continent }) {
  //le hago destructuring de mi objeto de props
  return (
    <div className={style.card}>
      <img src={image} alt="img" className={style.img} />
      <p className={style.name}>{name}</p>
      <p className={style.continent}>{continent}</p>
    </div>
  );
}

export default CountryCard;

//COMPONENTE CONTAINER ---> smart component
//Aca se le pasa un objeto al cual va a hacer un filtrado de info para luego pasarselo al componente presentacional (<Card/>)
import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import { countries } from "../../data/countries";
import styles from "./CountriesCards.module.css";

function CountriesCards() {
  return (
    <div className={styles.contain}>
      {countries.map((country) => {
        return (
          <CountryCard
            name={country.name}
            image={country.image}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
}

export default CountriesCards;

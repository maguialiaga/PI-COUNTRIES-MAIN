//dividir cantidad de paginas x cantdidad de CountryCards
//si el modulo no da exacto osea 18 % 4 > 1 ---> 4 + 1 = 5 paginas, para mostrar los elementos que queden restantes
//voy a hacer el redondeo con ceil ---> para ver si me toma + 1 si me llega a sobrar paises
//10 paises por pagina ---> la primera arranca con 9
//guardar en una variable el numero de paginas

import React from "react";
import styles from "../Paginado/Paginado.module.css";

function Paginado({ paginado, totalCountries }) {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalCountries / 9); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.navPag}>
      <ul className={styles.ulPag}>
        {pageNumbers?.map((number) => (
          <li className={styles.liPag} key={number}>
            <button onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginado;

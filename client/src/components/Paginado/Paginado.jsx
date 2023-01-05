import React from "react";
import styles from "../Paginado/Paginado.module.css";

export default function Paginado({
  paginado,
  currentPage,
  countriesPerPage,
  allCountries,
  setCountriesPerPage,
}) {
  if (currentPage === 1) {
    setCountriesPerPage(9);
  }
  // } else {
  //   setCountriesPerPage(10);
  // }

  //  const paginado = (pageNumber) => {
  //    setCurrentPage(pageNumber);
  //  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i); // me va a guardar un array con los distintos numeros de pagina hasta llegar al 28
    //divido la cantidad de paises que hay por la cantidad que quiero q haya en mi pagina
  }

  return (
    <nav className={styles.contpag}>
      <ul className={styles.ul}>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button className={styles.butPag} key={number}>
                <a
                  href
                  onClick={() => {
                    return paginado(number);
                  }}
                >
                  {number}
                </a>
              </button>
            );
          })}
      </ul>
    </nav>
  );
}

/*
  //Para paginado

  //dividir cantidad de paginas x cantdidad de CountryCards
  //si el modulo no da exacto osea 18 % 4 > 1 ---> 4 + 1 = 5 paginas, para mostrar los elementos que queden restantes
  //voy a hacer el redondeo con ceil ---> para ver si me toma + 1 si me llega a sobrar paises
  //10 paises por pagina ---> la primera arranca con 9
  //guardar en una variable el numero de paginas

*/

//NO ANDA
// const handleNext = () => {
//   if (currentPage + 1 <= pageNumbers.length) {
//     dispatch(setCurrentPage(currentPage + 1));
//   } else {
//     return null;
//   }
// };
// const handlePrev = () => {
//   if (currentPage - 1 >= 1) {
//     dispatch(setCurrentPage(currentPage - 1));
//   } else {
//     return null;
//   }
// };

//dividir cantidad de paginas x cantdidad de CountryCards
//si el modulo no da exacto osea 18 % 4 > 1 ---> 4 + 1 = 5 paginas, para mostrar los elementos que queden restantes
//voy a hacer el redondeo con ceil ---> para ver si me toma + 1 si me llega a sobrar paises
//10 paises por pagina ---> la primera arranca con 9
//guardar en una variable el numero de paginas
import { useState } from "react";
import React from "react";
import styles from "../Paginado/Paginado.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import Loading from "../Loading/Loading";
import CountryCard from "../../components/CountryCard/CountryCard";

// const showCards = (data) => {
//   return data.map((country) => {
//     return (
//       <CountryCard
//         name={country.name}
//         image={country.image}
//         continent={country.continent}
//         id={country.id}
//       />
//     );
//   });
// };

function Paginado() {
  const dispatch = useDispatch();
  //Saco del estado global el currentPage
  const currentPage = useSelector((state) => state.currentPage);
  const totalCountries = useSelector((state) => state.countries);
  const countriesCopy = useSelector((state) => state.allCountries);
  //Ahora creo los estados locales
  const [countriesPerPage] = useState(9); //cantidad de paises por pagina = 9

  const pages = [];
  for (let i = 0; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    //divido la cantidad de paises que hay por la cantidad que quiero q haya en mi pagina
    pages.push(i);
  }

  const indexLastCountries = currentPage * countriesPerPage;
  const indexFirstCountries = indexLastCountries - countriesPerPage;

  const currentCountries = totalCountries.slice(
    indexFirstCountries,
    indexLastCountries
  ); // me dice de donde a donde se va a cortar mi array con el primero y el ultimo ---> siendo estos 9 en total

  const handleClick = (e) => {
    const value = e.target.id;
    dispatch(setCurrentPage(Number(value)));
  };

  const numberOfPages = pages.map((numbers) => {
    return (
      <li
        id={numbers}
        onClick={handleClick}
        className={currentPage === numbers ? styles.active : null}
      >
        {numbers}
      </li>
    );
  });

  const handlePrev = () => {};
  const handleNext = () => {};

  return (
    <>
      <div>
        {currentCountries > 0 ? (
          currentCountries.map((country) => {
            return (
              <CountryCard
                name={country.name}
                image={country.image}
                continent={country.continent}
                id={country.id}
              />
            );
          })
        ) : countriesCopy < 0 ? (
          <Loading />
        ) : (
          <div>
            <p>
              <b>There are no countries with those features</b>
            </p>
          </div>
        )}
      </div>

      <div>
        <ul className={styles.numberPages}>
          <li>
            <button onclick={handlePrev}>Previous</button>
          </li>
          {numberOfPages}
          <li>
            <button onclick={handleNext}>Next</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Paginado;

/*
  //Para paginado

  //indice del ultimo pais por pagina
  const lastCountry = (currentPage) => {
    if (currentPage === 1) return 9;
    return currentPage * countryPerPage - 1;
  };
  //indice del primer pais por pagina
  const firstCountry = (lastCountry, countryPerPage) => {
    if (currentPage === 1) return 0;
    return lastCountry - countryPerPage;
  };

  //Arreglo de paises por pagina
  const currentCountries = totalCountries.slice(firstCountry, lastCountry);
  const paginado = (pageNum) => setCurrentPage(pageNum);

*/

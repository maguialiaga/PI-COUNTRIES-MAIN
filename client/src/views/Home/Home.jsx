import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getAllCountries } from "../../redux/actions";

import CountryCard from "../../components/CountryCard/CountryCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";
import Paginado from "../../components/Paginado/Paginado";
import styles from "../Home/Home.modules.css";
import world from "../../styles/Images";
import refresh from "../../styles/Images";

function Home() {
  const dispatch = useDispatch();

  //Me traigo del estado global:
  const totalCountries = useSelector((state) => state.countries);
  const totalAct = useSelector((state) => state.activities);
  const countriesCopy = useSelector((state) => state.allCountries);

  //Ahora creo los estados locales que tambien puedo pasar como props
  const [currentPage, setCurrentPage] = useState(1); //pagina actual
  const [countryPerPage, setCountryPerPage] = useState(9); //cantidad de paises por pagina
  const [order, setOrder] = useState("");

  //----------------------------------------------------------------------------------------------------------
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

  //----------------------------------------------------------------------------------------------------------
  const handleClick = () => {
    dispatch(getAllCountries());
  };

  const handleOrderAlph = () => {};

  const handleOrderPopu = () => {};

  const handleFilterCont = () => {};

  const handleFilterAct = () => {};

  //----------------------------------------------------------------------------------------------------------
  return (
    <div className={styles.contHome}>
      <div>
        <div className={styles.navBar}>
          <div className={styles.navIzq}>
            <Link to="/">
              <img src={world} alt="world" className={styles.worldImg}></img>
            </Link>
          </div>

          <SearchBar />

          <div className={styles.navDer}>
            <NavLink to="/home/createActivity">
              <button className={styles.buttonCreate}>create activity</button>
            </NavLink>
          </div>

          <button onClick={handleClick()} className={styles.buttonRef}>
            <img src={refresh} alt="refresh" className={styles.refresh}></img>
          </button>

          <div className={styles.filters}>
            <select
              onChange={(e) => handleOrderAlph(e)}
              className={styles.order}
            >
              <option value="all">Order</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <select
              onChange={(e) => handleOrderPopu(e)}
              className={styles.div_selectAll}
            >
              <option value="all">All</option>
              <option value="higher">Higher</option>
              <option value="lower">Lower</option>
            </select>
            <select
              onChange={(e) => handleFilterCont(e)}
              className={styles.div_selectAll}
            >
              <option value="all">All</option>
              <option value="north america">North America</option>
              <option value="south america">South America</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="antartica">Antartica</option>
              <option value="oceania">Oceania</option>
            </select>
            <select
              onChange={(e) => handleFilterAct(e)}
              className={styles.created}
            >
              <option value="all">Activities</option>
              {totalAct.map((act) => {
                return <option value={act.name}>{act.name}</option>;
              })}
            </select>
          </div>
          <div className={styles.div_countries}>
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
            ) : countriesCopy > 0 ? (
              <Loading />
            ) : (
              <div>
                <p>
                  <b>There are no countries with those features</b>
                </p>
              </div>
            )}
          </div>
          <div className={styles.pagi}>
            <Paginado allCountries={totalCountries.length} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

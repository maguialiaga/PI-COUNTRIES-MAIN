import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCountries,
  orderByAlphabet,
  orderByPopulation,
  filterByContinent,
  filterByActivity,
  getActivity,
  // setCurrentPage,
  // resetCountries,
} from "../../redux/actions";

import CountryCard from "../../components/CountryCard/CountryCard";
import Loading from "../../components/Loading/Loading";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado";
import styles from "../Home/Home.module.css";
//import world from "../../styles/Images/world.png";
//import refresh from "../../styles/Images/refresh.png";
import back from "../../styles/Images/atras.png";

function Home() {
  const dispatch = useDispatch();

  //Me traigo del estado global:
  // const currentPage = useSelector((state) => state.currentPage);
  const totalAct = useSelector((state) => state.activities);
  const allCountries = useSelector((state) => state.countries);

  //Ahora creo los estados locales
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9); //cantidad de paises por pagina = 9

  //estos estados locales me sirven para cuando se actualicen, me los renderice!!
  const [alphOrder, setAlphOrder] = useState("");
  const [popOrder, setPopOrder] = useState("");
  const [continenOrder, setContinentOrder] = useState("");
  const [activity, setActivity] = useState("");

  const indexLastCountries = currentPage * countriesPerPage;
  const indexFirstCountries = indexLastCountries - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexFirstCountries,
    indexLastCountries
  ); // me dice de donde a donde se va a cortar mi array con el primero y el ultimo ---> siendo estos 9 en total

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllCountries()); //mapDispatchToProps
    dispatch(getActivity());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getAllCountries());
    setCurrentPage(1);
  };

  const handleOrderAlph = (e) => {
    const value = e.target.value;
    // if (value === "All") {
    //   return dispatch(getAllCountries());
    // } else {
    dispatch(orderByAlphabet(value));
    setAlphOrder(value);
    setCurrentPage(1);
    // }
  };

  const handleOrderPopu = (e) => {
    const value = e.target.value;
    // if (value === "All") {
    //   return dispatch(getAllCountries());
    // } else {
    dispatch(orderByPopulation(value));
    setCurrentPage(1);
    setPopOrder(value);
    // }
  };

  const handleFilterCont = (e) => {
    const value = e.target.value;
    dispatch(filterByContinent(value));
    setCurrentPage(1);
    setContinentOrder(value);
  };

  const handleFilterAct = (e) => {
    const value = e.target.value;
    dispatch(filterByActivity(value));
    setCurrentPage(1);
    setActivity(value);
  };

  //----------------------------------------------------------------------------------------------------------
  return (
    <div className={styles.contHome}>
      <div>
        <div className={styles.navBar}>
          <div className={styles.navIzq}>
            <Link to="/">
              <img src={back} alt="back" className={styles.arrowBack}></img>
            </Link>
          </div>

          <SearchBar />

          <div className={styles.navDer}>
            <Link to="/home/createActivity">
              <button className={styles.buttonCreate}>Create Activity</button>
            </Link>
          </div>

          <button onClick={handleClick} className={styles.buttonRef}>
            {/* <img src={refresh} alt="refresh" className={styles.refresh}></img> */}
            Refresh
          </button>

          <div className={styles.filters}>
            <select
              onChange={(e) => handleOrderAlph(e)}
              className={styles.order}
            >
              <option value="All" key="All">
                Order
              </option>
              <option value="asc" key="A-Z">
                A-Z
              </option>
              <option value="dec" key="Z-A">
                Z-A
              </option>
            </select>
            <select
              onChange={(e) => handleOrderPopu(e)}
              className={styles.div_selectAll}
            >
              <option value="All" key="All">
                All
              </option>
              <option value="min" key="min">
                Min Population
              </option>
              <option value="max" key="max">
                Max Population
              </option>
            </select>
            <select
              onChange={(e) => handleFilterCont(e)}
              className={styles.div_selectAll}
            >
              <option value="All" key="All">
                All
              </option>
              <option value="Africa" key="Africa">
                Africa
              </option>
              <option value="Asia" key="Asia">
                Asia
              </option>
              <option value="Europe" key="Europe">
                Europe
              </option>
              <option value="Antartica" key="Antartica">
                Antartica
              </option>
              <option value="Oceania" key="Oceania">
                Oceania
              </option>
              <option value="South America" key="South America">
                South America
              </option>
              <option value="North America" key="North america">
                North America
              </option>
            </select>
            <select
              onChange={(e) => handleFilterAct(e)}
              className={styles.created}
            >
              <option value="All" key="All">
                Activities
              </option>
              {totalAct.map((act) => {
                return <option value={act.name}>{act.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={styles.pagi}>
          <Paginado
            paginado={paginado}
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            setCountriesPerPage={setCountriesPerPage}
          />
        </div>
        <div className={styles.contCards}>
          {currentCountries.length ? (
            currentCountries.map((c) => {
              return (
                <CountryCard
                  name={c.name}
                  image={c.image}
                  continent={c.continent}
                  id={c.id}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>

        {/* <div className={styles.pagi}>
          <Paginado
            paginado={paginado}
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            setCountriesPerPage={setCountriesPerPage}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;

/* <div className={styles.div_countries}>
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
*/

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCountries,
  orderByAlphabet,
  orderByPopulation,
  filterByContinent,
  filterByActivity,
  // getActivity,
  // resetCountries,
} from "../../redux/actions";

import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado";
import styles from "../Home/Home.module.css";
//import world from "../../styles/Images/world.png";
//import refresh from "../../styles/Images/refresh.png";
import back from "../../styles/Images/atras.png";

function Home() {
  const dispatch = useDispatch();

  //Me traigo del estado global:
  const totalAct = useSelector((state) => state.activities);
  // const countriesCopy = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getAllCountries()); //mapDispatchToProps
    // dispatch(getActivity());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getAllCountries());
  };

  const handleOrderAlph = (e) => {
    const value = e.target.value;
    dispatch(orderByAlphabet(value));
  };

  const handleOrderPopu = (e) => {
    const value = e.target.value;
    dispatch(orderByPopulation(value));
  };

  const handleFilterCont = (e) => {
    const value = e.target.value;
    dispatch(filterByContinent(value));
  };

  const handleFilterAct = (e) => {
    const value = e.target.value;
    dispatch(filterByActivity(value));
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
              <option value="All">Order</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <select
              onChange={(e) => handleOrderPopu(e)}
              className={styles.div_selectAll}
            >
              <option value="All">All</option>
              <option value="higher">Higher</option>
              <option value="lower">Lower</option>
            </select>
            <select
              onChange={(e) => handleFilterCont(e)}
              className={styles.div_selectAll}
            >
              <option value="All">All</option>
              <option value="North america">North America</option>
              <option value="South america">South America</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Antartica">Antartica</option>
              <option value="Oceania">Oceania</option>
            </select>
            <select
              onChange={(e) => handleFilterAct(e)}
              className={styles.created}
            >
              <option value="All">Activities</option>
              {totalAct.map((act) => {
                return <option value={act.name}>{act.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={styles.pagi}>
          <Paginado />
        </div>
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

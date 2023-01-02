import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom"
import { cleanDetail, getDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CountryDetail from "./CountryDetail";
import ActivityDetail from "./ActivityDetail";
import back from "../../styles/Images/atras.png";
import styles from "../Detail/Detail.module.css";

function Detail(props) {
  const countryId = props.match.params.id;
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  // const {id} = useParams() lo mismo que {match.params.id} para mandarlo a la ruta del pais en especifico

  useEffect(() => {
    dispatch(getDetail(countryId));
    return function () {
      dispatch(cleanDetail()); // me lo limpia al que estaba antes cuando vuelvo a entrar con otro detail
    };
  }, [dispatch, countryId]);

  return (
    <div className={styles.contPag}>
      <div>
        <div className={styles.navBar}>
          <div className={styles.navIzq}></div>
          <NavLink to="/home">
            <img src={back} alt="back" className={styles.arrowBack}></img>
          </NavLink>
        </div>
        <div className={styles.contGral}>
          <div className={styles.cardForm}>
            <CountryDetail
              name={country.name}
              continent={country.continent}
              id={country.id}
              capital={country.capital}
              subregion={country.subregion}
              area={country.area}
              population={country.population}
              image={country.image}
            />
          </div>

          <div className={styles.cardForm}>
            <h2 className={styles.title}>Tourist Activities</h2>
            {country.activities?.length > 0 ? (
              country.activities.map((act) => {
                return (
                  <div className={styles} key={act.id}>
                    <ActivityDetail
                      name={act.name}
                      difficulty={act.difficulty}
                      duration={act.duration}
                      season={act.season}
                    />
                  </div>
                );
              })
            ) : (
              <p>There are no activities</p>
            )}
            <ActivityDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

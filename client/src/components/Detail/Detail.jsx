import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getDetail, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

//import Loading from "../Loading/Loading";
import ActivityDetail from "./ActivityDetail";
import back from "../../styles/Images/atras.png";
import styles from "../Detail/Detail.module.css";

function Detail(props) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  let { countryId } = useParams();
  // const id = props.match.params.countryId;
  // console.log(detail.activities);

  useEffect(() => {
    dispatch(getDetail(countryId));
    return function () {
      dispatch(cleanDetail()); //  el return me hace el unmount me lo limpia al que estaba antes cuando vuelvo a entrar con otro detail
    };
  }, [dispatch, countryId]);

  const countryWithActivity =
    detail.activities &&
    detail.activities.map((act) => {
      return {
        id: act.id,
        name: act.name,
        difficulty: act.difficulty,
        duration: act.duration,
        season: act.season,
      };
    });

  return (
    <div className={styles.contPag}>
      <div>
        <div className={styles.navBar}>
          <div className={styles.navIzq}></div>
          <NavLink to="/home">
            <img src={back} alt="back" className={styles.arrowBack} />
          </NavLink>
        </div>

        <div className={styles.contGral}>
          <div className={styles.orderCards}>
            <section className={styles.cardForm}>
              <img src={detail.image} alt="flag" className={styles.flag}></img>
              <h3 className={styles.name}>{detail.name}</h3>
              <div className={styles.info}>
                <p className={styles.p}>
                  <b>ID</b>
                  {countryId}
                </p>
                <p className={styles.p}>
                  <b>Continent</b>
                  {detail.continent}
                </p>
                <p className={styles.p}>
                  <b>Capital</b>
                  {detail.capital}
                </p>
                <p className={styles.p}>
                  <b>SubRegion</b>
                  {detail.subregion}
                </p>
                <p className={styles.p}>
                  <b>Area</b>
                  {detail.area}
                </p>
                <p className={styles.p}>
                  <b>Population</b>
                  {detail.population}
                </p>
              </div>
            </section>
            {/* {detail.activities ? (
              <div className={styles.titleAct}>Activities</div>
            ) : (
              <div className={styles.titleAct}>
                This country has no activities
              </div>
            )} */}
            <div>
              {detail.activities && (
                <ActivityDetail countryWithActivity={countryWithActivity} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

// lo mismo que {props.match.params.id} para mandarlo a la ruta del pais en especifico
// //const loading = useSelector((state) => state.loading);
//props.match.params.id;

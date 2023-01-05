import { React } from "react";
import styles from "../Detail/ActivityDetail.module.css";

function ActivityDetail(countryWithActivity) {
  // console.log(countryWithActivity, "llega al activity"); //es un array con las distintas {} act del pais

  return (
    <div className={styles.contGral}>
      {countryWithActivity ? (
        countryWithActivity.countryWithActivity.map((act) => {
          return (
            <section className={styles.cardForm}>
              <h3 className={styles.name}>{act.name}</h3>
              <p className={styles.p}>
                <b>Difficulty</b>
                <p>{act.difficulty}</p>
              </p>
              <p className={styles.p}>
                <b>Duration</b>
                <p> {act.duration}</p>
              </p>
              <p className={styles.p}>
                <b>Season</b>
                <p>{act.season}</p>
              </p>
            </section>
          );
        })
      ) : (
        <p>This country has no activities</p>
      )}
    </div>
  );
}

export default ActivityDetail;

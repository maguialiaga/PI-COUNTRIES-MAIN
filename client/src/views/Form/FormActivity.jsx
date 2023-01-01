import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "../Form/FormActivity.module.css";
import back from "../../styles/Images/atras.png";

const validate = (input) => {
  //funcion para validar la informacion q me llega desde el input
  let error = {};
};

function FormActivity() {
  const dispatch = useDispatch();
  const totalCountries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
  });
  const [error, setError] = useState({});

  const difficulties = ["Difficulties", "1", "2", "3", "4", "5"];
  const duration = ["Duration", "30 min", "1 Hour", "2 Hours", "6 Hours"];
  const seasons = ["Seasons", "Fall", "Winter", "Spring", "Summer"];
  //los ordeno de mayor a menor
  totalCountries.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const handleSubmit = (e) => {};
  const handleSelectDuration = (e) => {};
  const handleSelectDifficulty = (e) => {};
  const handleSelectSeason = (e) => {};
  const handleSelectCountry = (e) => {};

  return (
    <div className={styles.contPag}>
      <div>
        <div className={styles.navBar}>
          <div className={styles.navIzq}>
            <NavLink to="/home">
              <img src={back} alt="back" className={styles.arrowBack}></img>
            </NavLink>
          </div>
        </div>

        <div className={styles.contGral}>
          <div className={styles.title}>Create your own tourist activity</div>

          <div className={styles.cardForm}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.form}>
                <div>
                  <label className={styles.name}>
                    <b>Name:</b>
                  </label>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    placeholder="Name"
                    className={styles.inputs}
                  />
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelectDuration(e)}
                    className={styles.selectBox}
                  >
                    {duration.map((duration) => (
                      <option value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    onChange={(e) => handleSelectDifficulty(e)}
                    className={styles.selectBox}
                  >
                    {difficulties.map((difficulty) => (
                      <option value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelectSeason(e)}
                    className={styles.selectBox}
                  >
                    {seasons.map((seasons) => (
                      <option value={seasons}>{seasons}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelectCountry(e)}
                    className={styles.selectBox}
                  >
                    {totalCountries.map((country) => (
                      <option value={country.name} id={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className={styles.submitButton}>
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormActivity;

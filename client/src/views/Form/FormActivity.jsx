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
  const totalCOuntries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
  });

  const difficulties = ["Difficulties", "1", "2", "3", "4", "5"];
  const duration = ["Duration", "30 min", "1 Hour", "2 Hours", "6 Hours"];
  const seasons = ["Seasons", "Fall", "Winter", "Spring", "Summer"];

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
            <form>
              <div className={styles.form}>
                <div>
                  <div>Name:</div>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    placeholder="Name"
                    className={styles.inputs}
                  />
                </div>

                <div>
                  <div>Difficulty:</div>
                  <input
                    type="number"
                    value={input.difficulty}
                    name="difficulty"
                    placeholder="Difficulty"
                    className={styles.inputs}
                  />
                </div>
                <div>
                  <div>Duration:</div>
                  <input
                    type="number"
                    value={input.duration}
                    name="duration"
                    placeholder="1-24 Hours"
                    className={styles.inputs}
                  />
                </div>
                <div>
                  <div>Season:</div>
                  <input
                    type="text"
                    value={input.duration}
                    name="duration"
                    placeholder="Duration"
                    className={styles.inputs}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormActivity;

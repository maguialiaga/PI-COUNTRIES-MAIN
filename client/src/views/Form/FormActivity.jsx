import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllCountries, postActivity } from "../../redux/actions";
import styles from "../Form/FormActivity.module.css";
import back from "../../styles/Images/atras.png";

const validate = (input) => {
  //funcion para validar la informacion q me llega desde el input
  let error = {};
  if (!input.name) {
    error.name = "Name is required";
  }
  if (input.name.length > 250) {
    error.name = "Name sould be shorter";
  }
  if (!input.duration || input.duration === "Duration") {
    error.duration = "Duration is needed";
  }
  if (input.difficulty === 0 || input.difficulty === "Difficulty") {
    error.difficulty = "Difficulty are needed";
  }
  if (!input.seasons || input.seasons === "Seasons") {
    error.difficulty = "Season is needed";
  }
  if (!input.countryId.length) {
    error.countryId = "Requiered to add a Country";
  }
  return error;
};

function FormActivity() {
  const dispatch = useDispatch();
  const totalCountries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countryId: [], //puden ser varios ids por que pueden repetirse actividades en 2 paises distintos
    countries: [],
  });
  const [error, setError] = useState({});

  const difficulty = ["Difficulty", "1", "2", "3", "4", "5"];
  const duration = ["Duration", "30 min", "1 Hour", "2 Hours", "6 Hours"];
  const seasons = ["Seasons", "Fall", "Winter", "Spring", "Summer"];

  //los ordeno de mayor a menor para el listado de paises cuando me haga elegir
  totalCountries.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const handleChangeName = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      name: value,
    });
  };
  const handleSelectDuration = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      duration: value,
    });
  };
  const handleSelectDifficulty = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      difficulty: value,
    });
  };
  const handleSelectSeason = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      season: value,
    });
  };
  const handleSelectCountry = (e) => {
    const value = e.target.value;
    const id = totalCountries.find((c) => c.name === value).id; //le indico que me de el id del que coincida el nombre del value con el nombre del total de paises que me traigo del estado global
    setInput({
      ...input,
      countries: [...input.countries, value],
      countryId: [...input.countryId, id],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefaut();
    //le indico que no me refresque la pag, me cambia el comportamiento normal del formulario
    setError(validate(input)); //aca guardo en mi estado los errores en un objeto
    const errores = validate(input);
    // for (const property of errores) {
    //   if (errores.hasOwnProperty[property]) {}
    const arrayProperties = Object.values(errores); //Guardo en un array las propiedades
    if (!arrayProperties.length) dispatch(postActivity(input)); //le mando el input > todo este body con info
    setInput({
      name: "",
      difficulty: 0,
      duration: "",
      season: "",
      countryId: [],
      countries: [],
    });
    alert();
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

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
                    value={input.name} // le doy el valor del estado y viceversa mientras escribo en el input para binderalos doblemente, doble enlace
                    name="name"
                    placeholder="Name"
                    className={styles.inputs}
                    onChange={(e) => handleChangeName(e)}
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
                    {difficulty.map((dif) => (
                      <option value={dif}>{dif}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelectSeason(e)}
                    className={styles.selectBox}
                  >
                    {seasons.map((season) => (
                      <option value={season}>{season}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelectCountry(e)}
                    className={styles.selectBox}
                  >
                    <option value="all">Countries</option>
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

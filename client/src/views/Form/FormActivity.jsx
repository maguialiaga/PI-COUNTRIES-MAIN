import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getAllCountries,
  postActivity,
  getActivity,
} from "../../redux/actions";
import styles from "../Form/FormActivity.module.css";
import back from "../../styles/Images/atras.png";

const validateName = (input) => {
  //funcion para validar la informacion q me llega desde el input
  let error = {};
  if (!input.name) {
    error.name = "Name is required";
  }
  if (input.name.length > 25) {
    error.name = "Name should be shorter";
  }
  return error;
};

const validateOthers = (input) => {
  //funcion para validar la informacion q me llega desde el input
  let error = {};
  if (input.difficulty === "" || input.difficulty === "Difficulty") {
    error.difficulty = "Difficulty is needed";
  }
  if (input.duration === "" || input.duration === "Duration") {
    error.duration = "Duration is needed";
  }
  if (input.season === "" || input.season === "Season") {
    error.season = "Season is needed";
  }
  // if (input.countryId === []) {
  //   error.countryId = "Country is needed";
  // }
  return error;
};

function FormActivity() {
  const dispatch = useDispatch();
  const totalCountries = useSelector((state) => state.countries);
  //los ordeno de mayor a menor para el listado de paises cuando me haga elegir
  totalCountries.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  const [error, setError] = useState({});
  const history = useHistory(); //para que cuando se haya creado me vuelva a la ruta del home
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countryId: [], //puden ser varios por que pueden repetirse actividades en 2 paises distintos
  });

  const difficulty = ["Difficulty", "1", "2", "3", "4", "5"];
  const duration = ["Duration", "30 min", "1 Hour", "2 Hours", "6 Hours"];
  const season = ["Season", "Fall", "Winter", "Spring", "Summer"];

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  // useEffect(() => {
  //   setError(validateOthers(input));
  // }, [input]);

  console.log(input);

  const handleChangeName = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
    setError(
      validateName({
        ...error,
        [e.target.name]: value,
      })
    );
  };
  const handleSelectDuration = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      duration: value,
    });
    setError(
      validateOthers({
        ...error,
        duration: value,
      })
    );
  };
  const handleSelectDifficulty = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      difficulty: value,
    });
    setError(
      validateOthers({
        ...error,
        difficulty: value,
      })
    );
  };
  const handleSelectSeason = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      season: value,
    });
    setError(
      validateOthers({
        ...error,
        season: value,
      })
    );
  };
  const handleSelectCountry = (e) => {
    const id = e.target.value;
    setInput({
      ...input,
      countryId: [...input.countryId, id],
    });
    setError(
      validateOthers({
        ...error,
        countryId: id,
      })
    );
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      countryId: [
        ...input.countryId.filter((c) => {
          return c !== e;
        }),
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //le indico que no me refresque la pag, me cambia el comportamiento normal del formulario
    dispatch(postActivity(input));
    setInput({
      name: "",
      difficulty: 0,
      duration: "",
      season: "",
      countryId: [],
    });
    alert("Activity successfully created");
    history.push("/home");
  };

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
                  <label className={styles.label}>Activity:</label>
                  <input
                    type="text"
                    value={input.name} // le doy el valor del estado y viceversa mientras escribo en el input para binderalos doblemente, doble enlace
                    name="name"
                    onChange={(e) => handleChangeName(e)}
                    placeholder="Activity name"
                    autoComplete="off"
                    className={styles.inputs}
                    required // para que cuando no este completo me salte que me falta completarlo
                  />
                  {error.name && <p className={styles.error}>{error.name}</p>}
                </div>

                <div>
                  <label className={styles.label}>Duration:</label>
                  <select
                    onChange={(e) => handleSelectDuration(e)}
                    className={styles.selectBox}
                    required
                  >
                    <option value="" hidden>
                      Choose an option
                    </option>
                    {duration.map((duration) => (
                      <option value={duration} name="duration">
                        {duration}
                      </option>
                    ))}
                  </select>
                  {error.duration && (
                    <p className={styles.error}>{error.duration}</p>
                  )}
                </div>

                <div>
                  <label className={styles.label}>Difficulty:</label>
                  <select
                    onChange={(e) => handleSelectDifficulty(e)}
                    className={styles.selectBox}
                    required
                  >
                    <option value="" hidden>
                      Choose an option
                    </option>
                    {difficulty.map((difficulty) => (
                      <option value={difficulty} name="difficulty">
                        {difficulty}
                      </option>
                    ))}
                  </select>
                  {error.difficulty && (
                    <p className={styles.error}>{error.difficulty}</p>
                  )}
                </div>

                <div>
                  <label className={styles.label}>Season:</label>
                  <select
                    onChange={(e) => handleSelectSeason(e)}
                    className={styles.selectBox}
                    required
                  >
                    <option value="" hidden>
                      Choose season
                    </option>
                    {season.map((season) => (
                      <option value={season} name="season" key={season}>
                        {season}
                      </option>
                    ))}
                  </select>
                  {error.season && (
                    <p className={styles.error}>{error.season}</p>
                  )}
                </div>

                <div>
                  <label className={styles.label}>Country:</label>
                  <select
                    onChange={(e) => handleSelectCountry(e)}
                    className={styles.selectBox}
                    required
                  >
                    <option value="" hidden>
                      Select Country
                    </option>
                    {totalCountries.map((country) => (
                      <option
                        value={country.id}
                        name="countries"
                        key={country.id}
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {error.countryId && (
                    <p className={styles.error}>{error.countryId}</p>
                  )}
                </div>
                <div>
                  <ul>
                    <li className={styles.countriesSelected}>
                      {input.countryId.map((c) => {
                        return (
                          <div>
                            {c}
                            <button
                              type="button"
                              onClick={() => handleDelete(c)}
                            >
                              x
                            </button>
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <button type="submit" className={styles.submitButton}>
                Create Activity
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormActivity;

//  const handleSubmit = (e) => {
//    e.preventDefaut();
//    //le indico que no me refresque la pag, me cambia el comportamiento normal del formulario
//    setError(validateOthers(input)); // le paso el estado completo con las validaciones!
//    const errores = validateOthers(input);
//    const arrayProperties = Object.values(errores); //Guardo en un array las propiedades
//    if (!arrayProperties.length) {
//      dispatch(postActivity(input)); //le mando el input --> todo este body con info
//      alert("Activity successfully created");
//      setInput({
//        name: "",
//        difficulty: 0,
//        duration: "",
//        season: "",
//        countryId: [],
//      });
//      history.push("/home");
//      dispatch(getActivity());
//    }
//  };

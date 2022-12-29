import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_POPULATION,
  ORDER_BY_ALPHABET,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  POST_ACTIVITY,
  GET_ACTIVITY,
  REMOVE_ACTIVITY,
  CLEAN_DETAIL,
} from "./actions";

const initialState = {
  allCountries: [], //donde guardo todos los paises de la api y los muestro apenas entra al home
  countries: [], //voy a hacer todos los filtrados con este array y la busqueda de la searchBar tambien
  country: [], //para el detalle de cada pais
  activities: [], //las actividades de cada pais
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        //seteo tambien este apenas carga la pagina despues va ir cambiando con los filtrados!!
        allCountries: action.payload,
        //me sirve este para resetearlo cuando quiera volver a iniciar sin ningun filtro
      };

    case GET_DETAIL:
      return {
        ...state,
        country: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case ORDER_BY_ALPHABET:
      const ordered =
        action.payload === "asc"
          ? //si el valor que me pasan es "asc" entonces el ordenamiento del array va a ser de A-Z
            //compara a todos y los va a ordenando de mayor a menor
            state.countries.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.countries.sort((a, b) => {
              //si es de Z-A
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        countries: ordered,
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const filtered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.continent === action.payload);
      return {
        ...state,
        countries: filtered,
      };

    case ORDER_BY_POPULATION:
      const order =
        action.payload === "higher"
          ? state.countries.sort((a, b) => {
              if (a.population > b.population) return 1;
              if (a.population < b.population) return -1;
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.population > b.population) return -1;
              if (a.population < b.population) return 1;
              return 0;
            });
      return {
        ...state,
        countries: order,
      };

    case FILTER_BY_ACTIVITY:
      let filterAct = [];
      state.countries.forEach((country) => {
        country.activities.forEach((act) => {
          if (action.payload === "All") {
            return (filterAct = [...state.allCountries]);
          } else if (action.payload === act.name) {
            return filterAct.push(act);
          }
        });
      });
      return {
        ...state,
        countries: filterAct,
      };
    case POST_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: [...action.payload],
      };
    case REMOVE_ACTIVITY:
      return {
        ...state,
        activities: [
          ...state.activities.filter((act) => act.id !== action.payload),
        ],
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        country: [],
      };

    //primero hacer el caso default por si no coincide con ninguna action--> devolver el estado como estaba
    default:
      return { ...state };
  }
};

export default reducer;

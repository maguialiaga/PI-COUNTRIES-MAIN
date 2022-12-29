import axios from "axios";

//planteo las ACTIONS TYPES las guardo en variables
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL=";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_BY_ALPHABET = "FILTER_BY_ALPHABET";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";

//creo las funciones ACTIONS CREATORS
export const getAllCountries = () => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ALL_COUNTRIES, payload: data });
      })
      .catch((error) => ({ error: error.message }));
  };
};

export const getDeatil = (id) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries/:${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_DETAIL, payload: data });
      })
      .catch();
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const filterByAlphabet = (payload) => {
  return { type: FILTER_BY_ALPHABET, payload };
};

export const filterByContinent = (payload) => {
  return { type: FILTER_BY_CONTINENT, payload };
};
export const filterByPopulation = (payload) => {
  return { type: FILTER_BY_POPULATION, payload };
};

export const filterByActivity = (payload) => {
  return { type: FILTER_BY_ACTIVITY, payload };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    const response = axios.post("http://localhost:3001/activities", payload);
    return dispatch({ type: POST_ACTIVITY, payload: response.data });
  };
};

export const getActivity = () => {
  return function (dispatch) {
    try {
      return fetch(`http://localhost:3001/activities`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: GET_ACTIVITY, payload: data });
        });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const removeActivity = (id) => {
  return { type: REMOVE_ACTIVITY, payload: id };
};

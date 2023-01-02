import axios from "axios";

//planteo las ACTIONS TYPES las guardo en variables
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL=";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const RESET_COUNTRIES = "RESET_COUNTRIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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

export const getDetail = (id) => {
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

export const orderByPopulation = (payload) => {
  return { type: ORDER_BY_POPULATION, payload };
};

export const orderByAlphabet = (payload) => {
  return { type: ORDER_BY_ALPHABET, payload };
};

export const filterByContinent = (payload) => {
  return { type: FILTER_BY_CONTINENT, payload };
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

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const resetCountries = () => {
  return { type: RESET_COUNTRIES };
};

export const setCurrentPage = (payload) => {
  return { type: SET_CURRENT_PAGE, payload };
};

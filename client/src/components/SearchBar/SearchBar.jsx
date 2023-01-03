import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountryByName } from "../../redux/actions";
// import Loading from "../Loading/Loading";

function SearchBar({ contFilter }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  if (contFilter === "") contFilter = "All"; //que me tire por default la busqueda a partir de todos los continents, si no hay nada en el select!!

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSumbit = () => {
    dispatch(getCountryByName(name, contFilter)); // (name,contFilter) le agrego como segundo payload el select del continente en el que esta filtrado
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="input"
        onChange={(e) => handleInput(e)}
      />
      <button className="button" type="submit" onClick={(e) => handleSumbit(e)}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

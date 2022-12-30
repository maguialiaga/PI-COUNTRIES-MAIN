import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountryByName } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleSumbit = (e) => {
    dispatch(getCountryByName(name));
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

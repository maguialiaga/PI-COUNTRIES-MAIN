import React from "react";
//import styles from "./Home/Home.modules.css"
//import { NavLink } from "react-router-dom";
//import { getAllCountries } from "../../redux/actions";
import CountryCard from "../../components/CountryCard/CountryCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // const dispatch = useDispatch();
  //Me traigo del estado global:
  const countries = useSelector((state) => {});

  return (
    <div>
      <SearchBar />
      <CountryCard />
    </div>
  );
}

export default Home;

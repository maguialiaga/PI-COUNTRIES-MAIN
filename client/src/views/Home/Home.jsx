import React from "react";
//import styles from "./Home/Home.modules.css"
//import { Link } from "react-router-dom";
//import { getAllCountries } from "../../redux/actions";
import CountryCard from "../../components/CountryCard/CountryCard";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <div>
      <SearchBar />
      <CountryCard />
    </div>
  );
}

export default Home;

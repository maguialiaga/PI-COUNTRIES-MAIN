//Los Controllers son funciones para utilizar en las rutas ---> van a los controllers de las rutas

const axios = require("axios");
const { Country, Activity } = require("../db"); //Me traigo los modelos

//tiene que traer:
//Imagen de la bandera
//Nombre
//Continente

//Paises que me trae la api
const getApiInfo = async () => {
  const allInfo = await axios.get("https://restcountries.com/v3/all");
  const countries = await allInfo.data.map((country) => {
    return {
      name: country.name.common ? country.name.common : "Has No Name",
      continent: country.continents[0],
      image: country.flags[0],
      //faltan los del detail:
      id: country.cca3,
      capital: country.capital ? country.capital[0] : "Has No capital",
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });
  // if (!allInfo || !countries) throw new Error("error from getApiInfo");
  return countries;
};

//Averiguar si hay algo dentro de mi Base de Datos sino traer los datos de la Api y guardarlos
async function uploadCountry() {
  const allCountriesApi = await getApiInfo(); //guardo en variable las de la api
  const dbInfo = await Country.findAll({
    include: {
      //que me incluyan las actividades que tiene cada uno junto con sus atributos
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  if (!dbInfo.length) {
    //si NO tiene algo dentro la bdd entonces traeme los de la api y guardalos
    const createCountries = await Country.bulkCreate(allCountriesApi);
    //le paso el array con todos los objetos que son los paises ---> utilizo bulkCreate por que son varios!
    return createCountries;
  } else {
    return dbInfo; //sino que me guarde todo en la bdd
  }
}

module.exports = {
  uploadCountry,
};

/*
CON EL .THEN() ---> TRABAJO EL VALOR DE RESOLUCION DE LA PROMESA!
   .then():
   const filterCountries = axios.get("https://restcountries.com/v3/all")
   .then(data => data.map(country)=>{
      return { 
         todos los datos que necesito
    }
   })
  */

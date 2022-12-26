const { uploadCountry } = require("../routes/utils");
const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  const { name } = req.query;
  const allCountries = await uploadCountry();
  try {
    if (name) {
      const countriesNames = await allCountries.filter(
        (country) => country.name.toLowerCase() === name.toLowerCase()
      );
      countriesNames.length
        ? res.status(200).send(countriesNames)
        : res.status(400).send("Countries names not found");
    } else {
      res.status(200).send(allCountries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountry = async (req, res) => {
  const { id } = req.params;
  //const allCountries = await uploadCountry();
  try {
    if (id) {
      //esto es redundante por que si o si va a tener id para entrar a esta ruta

      // const countryId = await allCountries.find((country) =>
      //   country.id.toLowerCase().includes(id.toLowerCase())
      // );
      const countryId = await Country.findByPk(id.toUpperCase(), {
        include: Activity,
      });

      countryId
        ? res.status(200).send(countryId)
        : res.status(400).send("Country Id not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountries,
  getCountry,
};

//GET:  rutas ---> "/" o "/?name" (QUERY)
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
//Si no existe ningún país mostrar un mensaje adecuado

//GET :
//Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

// try {
//   const { name } = req.query;
//   //si me pasan name por query
//   const countries = await getApiInfo();
//   if (name) {
//     //si mi base de datos tiene algo, sino le agrego los de la api
//     const allCountries = await Country.findAll();
//     const countriesNames = await allCountries.filter(
//       (country) => country.name.toLoweCase() === name.toLoweCase()
//     );
//     if (countriesNames.length) return countriesNames;
//     return res.status(404).send("Countries not found in db");
//   } else {
//     //si no me pasan nombre
//   }
// } catch (error) {}

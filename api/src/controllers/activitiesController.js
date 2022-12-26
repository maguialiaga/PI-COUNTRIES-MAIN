const { Activity } = require("../db");

const createActivity = async (req, res) => {
  //me traigo la info del body
  const { name, duration, difficulty, season, countryId } = req.body;

  try {
    //creo en mi bdd la nueva actividad que va a tener los siguientes atributos:
    const newActivity = await Activity.create({
      name,
      duration,
      difficulty,
      season,
    });
    //conecto ambas tablas asi --> la actividad con el Pais que me pasan como countryId por body
    //la concecto con los paises correspondientes y la devuelvo como respuesta
    newActivity.addCountry(countryId);
    //res.status(200).send(newActivity); //este me mostraria la actividad
    res.status(200).send("Activity successfully created");
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  createActivity,
};

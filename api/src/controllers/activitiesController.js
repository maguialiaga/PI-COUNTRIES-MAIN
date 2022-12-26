const { Activity, Country } = require("../db");

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
    res.status(404).send({ error: error.message }, "createActivity error");
  }
};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({ include: { model: Country } }); // aca puede ir dentro tambien:
    // {include: model : Country,}
    res.status(200).send(activities);
  } catch (error) {
    res.status(404).send({ error: error.message }, "getActivities error");
  }
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const activityToDelete = await Activity.findByPk(id.toLowerCase());
    if (!activityToDelete) {
      res.status(400).send("The activity does not exists");
    } else {
      activityToDelete.destroy(); //lo borro y devuelo finalmente el mensaje
      res.status(200).send("Activity deleted");
    }
  } catch (error) {
    res.staus(400).send({ error: error.message }, "deleteActivity error");
  }
};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const { name, duration, difficulty, season } = req.body;
  try {
    const activityToUpdate = await Activity.findByPk(id.toLowerCase());
    if (!activityToUpdate) {
      res.status(400).send("The activity does not exists");
    } else {
      activityToUpdate.update(
        {
          name,
          duration,
          difficulty,
          season,
        },
        {
          where: { id: id }, //me pasan el numero de id de la actividad que voy a modificar, tengo que especificar que sea esa actividad!
        }
      );
    }
    res.status(200).send("Activity updated");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  createActivity,
  getActivities,
  deleteActivity,
  updateActivity,
};

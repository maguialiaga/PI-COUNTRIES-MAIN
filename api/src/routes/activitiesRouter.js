const { Router } = require("express");
const {
  createActivity,
  getActivities,
  deleteActivity,
  updateActivity,
} = require("../controllers/activitiesController");
const { validateAct } = require("../middlewares/index");

const activitiesRouter = Router();

activitiesRouter.post("/", validateAct, createActivity); //le agrego el middleware en el medio para antes de que entre al controller
activitiesRouter.get("/", getActivities);
activitiesRouter.delete("/:id", deleteActivity);
activitiesRouter.put("/edit/:id", updateActivity);

module.exports = activitiesRouter;

//POST
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos, relacionada con los países correspondientes

//GET ---> que me traiga todas las actividades!
//DELETE ---> que me elimine la actividad!

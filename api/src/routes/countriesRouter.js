const { Router } = require("express");
const {
  getCountries,
  getCountry,
} = require("../controllers/countriesController");

const countriesRouter = Router();

countriesRouter.get("/", getCountries);
countriesRouter.get("/:id", getCountry);

module.exports = countriesRouter;

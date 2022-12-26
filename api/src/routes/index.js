const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const morgan = require("morgan");
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

const router = Router();

//MIDDLEWARES --> para hacer validaciones tambien modularizo algunos
router.use(express.json());
router.use(morgan("dev"));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//ROUTERS ---> modularizados
router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;

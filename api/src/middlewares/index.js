// router.use() ---> middleware para cuando quiera entrar a cualquiera de mis rutas, pero yo solo quiero que me valide estos datos cuando quiera crear una actividad! Por eso utilizo un middleware para validacion

const validateAct = (req, res, next) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  if (!name || !difficulty || !duration || !season || !countryId) {
    return res.status(400).json({ error: "missing info" });
  }
  next(); //para que me lleve al controller
};

// if (!name || name.length > 250) {
//   return res.status(400).json({ error: "Activity name is missing or is too long" });
// }
// if(difficulty === "Difficulty"|| )

// !name || !difficulty || !duration || !season
//   ? res.status(400).json({ error: "missing info" })
//   : next();
//Tambien puedo validar en esta funcion  si la informacion que me estan trayendo es correcta ---> por ejemplo que el name sea un string, la dificultad vaya del 1 al 5, las seasons sean solamente "" o "invierno", etc..., la duracion que sea un numero del 1 al 24 por las horas del dia y asi..

//   const { name, difficulty, duration, season, countryId } = req.body;
//   if (!name) return res.status(400).json({ error: "missing name" });
//   if (!difficulty) return res.status(400).json({ error: "missing difficulty" });
//   if (!duration) return res.status(400).json({ error: "missing duration" });
//   if (!season) return res.status(400).json({ error: "missing season" });
//   if (!countryId) return res.status(400).json({ error: "missing country ID" });
//   next();

module.exports = {
  validateAct,
};

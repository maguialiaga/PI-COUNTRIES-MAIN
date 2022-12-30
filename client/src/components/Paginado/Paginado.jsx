//dividir cantidad de paginas x cantdidad de CountryCards
//si el modulo no da exacto osea 18 % 4 > 1 ---> 4 + 1 = 5 paginas, para mostrar los elementos que queden restantes
//voy a hacer el redondeo con ceil voy ---> para ver si me toma
//10 paises por pagina
//guardar en una variable el numero de paginas

import React from "react";

function Paginado(props) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(props.countries / 9); i++) {}

  return <div></div>;
}

export default Paginado;

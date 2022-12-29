//Componente auxiliar > Store --->Donde se almacena el Estado Global
import reducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; //para que se pueda ver en el navegador

//creo el store:
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store; // una vez creado el store lo exporto al index.js para poder envolver toda la aplicacion con el <Provider que pase como prop ---> store = {store}> </Provider> de esa forma todos pueden acceder al estado global

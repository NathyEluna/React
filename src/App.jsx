import "./App.css";
import Contenedor from "./Practica208/Contenedor.jsx";
//Imports del ejercicio 1.
import Pelicula from "./Practica208/Ejercicio1/componentes/Pelicula.jsx";
import movie from "./Practica208/Ejercicio1/objeto/pelicula.json";
//Imports del ejercicio 2.
import Peliculas from "./Practica208/Ejercicio2/componentes/Peliculas.jsx";

function App() {
  const pelicula = {...movie.pelicula};
  return (
    <>
      <section>
        <h1>Ejercício 1</h1>
        <Contenedor>
          <Pelicula>
            {pelicula.resumen}
          </Pelicula>
        </Contenedor>
      </section>
      
      <section>
      <h1>Ejercício 2</h1>
        <Contenedor>
          <Peliculas/>
        </Contenedor>
      </section>
    </>
  )
};

export default App;

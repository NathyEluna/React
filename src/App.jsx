import "./App.css";
import Contenedor from "./Practica208/Contenedor.jsx";
//Imports del ejercicio 1.
import Pelicula from "./Practica208/Ejercicio1/componentes/Pelicula.jsx";
import movie from "./Practica208/Ejercicio1/objeto/pelicula.json";
//Imports del ejercicio 2.
import Peliculas from "./Practica208/Ejercicio2/componentes/Peliculas.jsx";
import movies from "./Practica208/Ejercicio2/objeto/peliculas.json";

function App() {
  return (
    <>
      <section>
        <h1>Ejercício 1</h1>
        <Contenedor>
          <Pelicula
          nombre={movie.pelicula.nombre}
          director={movie.pelicula.director}
          cartelera={movie.pelicula.cartelera}
          actores={movie.pelicula.actores}>
            {movie.pelicula.resumen}
          </Pelicula>
        </Contenedor>
      </section>
      
      <section>
      <h1>Ejercício 2</h1>
        <Contenedor>
          <Peliculas peliculas={movies.peliculas}/>
        </Contenedor>
      </section>
    </>
  )
};

export default App;

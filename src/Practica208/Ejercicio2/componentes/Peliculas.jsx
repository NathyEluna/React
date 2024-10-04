import Pelicula from "./Pelicula.jsx";
import movies from "../objeto/peliculas.json";

const Peliculas = () => {
    return(
        <>
            <div>
                {movies.peliculas.length
                    ? movies.peliculas.map((pelicula) => {
                        return (
                            <Pelicula
                            key={pelicula.id}
                            nombre={pelicula.nombre}
                            director={pelicula.director}
                            cartelera={pelicula.cartelera}
                            actores={pelicula.actores}>
                                {pelicula.resumen}
                            </Pelicula>
                        );
                    })
                : "No se han encontrado películas."}
            </div>
        </>
    );
};

export default Peliculas;
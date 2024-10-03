import Pelicula from "./Pelicula.jsx";
import movies from "../objeto/peliculas.json";

const Peliculas = () => {
    const peliculas = movies.peliculas.map(pelicula => {return{...pelicula}});

    return(
        <>
            <div>
                {peliculas.length
                    ? peliculas.map((pelicula) => {
                        return (
                            <Pelicula
                            key={pelicula.id}
                            nombre={pelicula.nombre}
                            director={pelicula.director}
                            cartelera={pelicula.cartelera}>
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
import Interprete from "./Interprete.jsx";
import movies from "../objeto/peliculas.json";

//Función para buscar la información de cada actor el el fichero pelicula.json y mostrar en la página.
const Interpretes = () => {
    const peliculas = [movies.peliculas.map(pelicula => {return{...pelicula}})];

    return(
        <>
            <div>
               {peliculas.map((actor) => {
                return(
                    <Interprete
                    key={actor.nombre}
                    nombre={actor.nombre}
                    imagen={actor.imagen}
                    biografia={actor.biografia}/>
                );
               })}
            </div>
        </>
    );
};

export default Interpretes;
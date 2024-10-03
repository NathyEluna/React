import Interprete from "./Interprete.jsx";
import pelicula from "../objeto/pelicula.json";

//Función para buscar la información de cada actor el el fichero pelicula.json y mostrar en la página.
const Interpretes = () => {
    const actores = [...pelicula.pelicula.actores];

    return(
        <>
            <div>
               {actores.map((actor) => {
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
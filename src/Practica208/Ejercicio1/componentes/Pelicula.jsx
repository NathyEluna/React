import Interpretes from './Interpretes.jsx';
import "./Pelicula.css";
import movie from "../objeto/pelicula.json";

//Función para formatear la manera que la película aparece en la página.
const Pelicula = (props) => {
    const {children} = props;
    //Constante para buscar los datos de la película el en archivo pelicula.json
    //La primera vez que intenté llamar al objeto, había utilizado [] y claro que no funcionaba.
    const pelicula = {...movie.pelicula};

    return(
        <>
            <section>
                <h1 className="pelicula-titulo">{pelicula.nombre}</h1>
                <h2 className="pelicula-subtitulo">{pelicula.director}</h2>
                <section className="pelicula-info">
                    <div className="pelicula-cartela">
                        <img src={pelicula.cartelera}/>
                    </div>
                    <div className="pelicula-resumen">
                        <h3>Resumen</h3>
                        <p>{children}</p>
                    </div>
                </section>
                <h1 className="pelicula-titulo">Elenco</h1>
                <div className="pelicula-elenco">
                    <Interpretes/>
                </div>
            </section>
        </>
    );
};

export default Pelicula;
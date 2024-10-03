import Interpretes from './Interpretes.jsx';
import "./Pelicula.css";

//Función para formatear la manera que la película aparece en la página.
const Pelicula = (props) => {
    const {nombre, director, cartelera, children} = props;

    return(
        <>
            <section>
                <h1 className="pelicula-titulo">{nombre}</h1>
                <h2 className="pelicula-subtitulo">{director}</h2>
                <section className="pelicula-info">
                    <div className="pelicula-cartela">
                        <img src={cartelera}/>
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
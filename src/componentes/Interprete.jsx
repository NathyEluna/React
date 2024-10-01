import "./Interprete.css";

const Interprete = (props) => {
    //Javascript
    const {children, nombre, foto} = props;
    return(
    //JSX    
        <>
            <div className="interprete-contenedor">
                <img className="interprete-imagen" alt="profile" src={foto} />
                <h1>{nombre}</h1>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Interprete;
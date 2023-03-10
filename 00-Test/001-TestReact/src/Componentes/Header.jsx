// Para el paso de variables a nuestras funciones pueden ver 
// el tema de desestructuracion de javascritp

const Header = ({autor,status}) => {  //Tambien se puede enviar como props y posteriormente llamarmos por props.autor

    return (
        <header className="header-wrapper">
            <h1>Welcome {autor}</h1>
            <h2>{status?'Activo':'No activo'}</h2>
        </header>
    )
}

export default Header
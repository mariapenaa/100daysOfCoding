import React from 'react';

const Card = () =>{

    return(
        <div className="cardcontainer">
            <div className="nosotros">
                <div className="titulosnosotros">
                    <h1 className="titulo">Estudio sobre el diario <br />pionero de la transformación digital</h1>
                    <h2 className="subtitulo">¿Querés concoer más acerca de <br /> su reinvención?</h2>
                    <button className="download">¡Descargue aquí!</button>
                </div>
            </div>
            <div className="informacion">
                <ul className="informacionlist"> 
                    <li>
                        <img src="./images/cliente.png" />
                        <p className="informacion-texto">Cliente siempre en el centro</p>
                    </li>
                    <li>
                        <img src="./images/multiplataforma.png" />
                        <p className="informacion-texto">Más que un diario, una multiplataforma</p>
                    </li>
                    <li>
                        <img src="./images/barreras.png" />
                        <p className="informacion-texto">Atravesando barreras en la era digital</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;
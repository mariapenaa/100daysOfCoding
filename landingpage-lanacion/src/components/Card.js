import React from 'react';
import Faq from './Faq'


const MainCard = () =>{

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
            <div className="transformacion">
                <h3 className="titulo-transformacion">Un diario que supo adaptarse</h3>
                <img className="fotodiario" src="./images/diario.jpg" />
                <h4 className="subtitulo-informacion">Desde 1869 hasta el presente digital</h4>
            </div>
            <div className="comentarios informacion">
            <h3 className="titulo-comentarios titulo-transformacion">Comentarios</h3>
            <ul className="informacionlist"> 
                    <li>
                        <img src="./images/icono.png" />
                        <p className="comentarios-texto">"¡Muy interesante!"</p>
                    </li>
                    <li>
                        <img src="./images/icono.png" />
                        <p className="comentarios-texto">"No puedo parar de leer"</p>
                    </li>
                    <li>
                        <img src="./images/icono.png" />
                        <p className="comentarios-texto">"Muchas cosas que no sabía"</p>
                    </li>
                    <li>
                        <img src="./images/icono.png" />
                        <p className="comentarios-texto">"¡Me encantó!"</p>
                    </li>
                </ul>
            </div>
            <Faq />
        </div>
    )
}

export default MainCard;
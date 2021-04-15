import React from 'react';

const Header = () =>{

    return(
        <div className='nav'>
            <img src="./images/logo.png" className="logo" />
            <ul className="navlist">
                <li>Nosotros</li>
                <li>Información</li>
                <li>Transformación</li>
                <li>Comentarios</li>
                <li>Más</li>
                <li>
                    <ul>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-youtube"></i></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Header;
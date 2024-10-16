import React from "react";
import "../styles/header.css";
// import logo from "../img/weather.png";


function Header() {
    return (
        <header>       
        {/* <img src={logo} alt="Logo" id="logo" />       */}
        <h1>
            Прогноз погоды
            <span>Лучший сайт о погоде</span>
        </h1>       
    </header>
    )
}

export default Header;
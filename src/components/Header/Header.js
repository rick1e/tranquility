import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Header.css'


const Header = (props) => {

    const className = props.faded ? "faded" : ""
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <div className="headerContainer">
            <div id="header" className={className} onClick={handleClick}>
                <img src={props.logo} className="header-logo" alt={props.alt} />
            </div>
            {props.show && <p id="header-p">
                Tranquility
            </p>}
        </div>
    )
}

export default Header

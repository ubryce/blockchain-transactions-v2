import React from 'react'

function NavBar() {
    return (
        <nav>
            <input type="checkbox" id="nav" className="hidden"></input>
            <label for="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="logo">
                <a href="#">BRAND</a>
            </div>
            <div className="nav-wrapper">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Bitcoin</a></li>
                    <li><a href="#">Ethereum</a></li>
                    <li><a href="#">API</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
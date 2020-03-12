import React from 'react'
import '../App.css'

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
                <a style={{ textDecoration: 'none' }} href="/">Blockchain Transactions</a>
            </div>
            <div className="nav-wrapper">
                <ul>
                    <li><a style={{ textDecoration: 'none' }} href="/liveMap">Live Map</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="/transactions">Transactions</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="/api">API</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
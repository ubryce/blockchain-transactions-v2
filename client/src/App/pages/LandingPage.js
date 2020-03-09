import React from 'react'

export default function LandingPage() {
    return (
    <div>
        <div className="container">
            <div className="loading-screen"></div>
            <div className="loader">
                <div className="ringOne ring">
                    <img src={ require('./Blockchain-Funds.png') } alt=""></img>
                </div>
                <div className="ringTwo ring">
                    <img src={ require('./Blockchain-Funds.png') } alt=""></img>
                </div>
            </div>
        </div>

        <nav>
            <input type="checkbox" id="nav" className="hidden"></input>
            <label for="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="logo">
                <a href="#">Blockchain Transactions</a>
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
        
        <div className="header">
            <h1 className="ml7" id="title">
                <span className="text-wrapper">
                    <span className="letters">Recent Blockchain Transactions</span>
                </span>
            </h1>

            <p id="tagline" className="p1">
                You can view live transactions for Bitcoin and Ethereum and the most recent transactions over $1 million USD. 
            </p>

            <br></br><br></br>

            <p id="tagline" className="p2">
                Also have an API for most recent transactions over $1 million USD. With a twitter bot that tweets whenever transactions are greater than $1 million.
            </p>
        </div>

        <div className="bottom-text">+0.00001db</div>

        <div className="copyright">2020 by Bryce Nguyen. All rights reserved</div>

        <div className="media">
            <ul>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-github"></ion-icon></li>
            </ul>
        </div>

        
    </div>
    )
}

import React, { useState, useEffect } from 'react';

import TheBadge from "./dignity.webp";

import "./card.css";


//<img src="./Badge.PNG"></img>

function Card() {
    return (
        <div class = "card">
            <div class = "card-top">
                <h1>Upendo Dignity Kit</h1>
                <div>
                    <div class = "card-body">
                    <img src={TheBadge}></img>
                    </div>
                    <div>
                        <p>Parking Rewards Meter</p>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Card
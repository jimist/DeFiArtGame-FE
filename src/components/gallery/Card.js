import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import APIService from "../APIService";

import TheBadge from "./Badge.PNG";
import TheMeter from "./TM_STUDIO JEN 766-84.jpg";

import "./card.css";

const ShowRecord = () => {
    APIService.ReadArticle(1)
    //.then(resp => console.log(resp))
    //.then(resp => props.updatedData(resp))
    .then(resp => resp.json())
    .catch(error => console.log(error))

}

//<img src="./Badge.PNG"></img>

function Card() {
    return (
        <div class = "card">
            <div class = "card-top">
                <h1>Test</h1>
                <div>
                    <div class = "card-body">
                    <img src={TheBadge}></img>
                    </div>
                    <div>
                        <p>Parking Rewards Meter</p>
                    </div>
                    <div class = "card-body">
                    <img src={TheMeter}></img>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Card
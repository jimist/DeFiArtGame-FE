import React, { useState, useEffect } from 'react';
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

import "./index.css";

function Gallery() {
    return (
        <div className = "gallery">
            <div class = "left-container">
                
                <Card/>
                <Card2/>
                <Card3/>
                <Card4/>
                
                </div> 
        </div>
    );
   }

export default Gallery
 
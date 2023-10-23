import React, { useEffect } from "react";
import { useState } from "react";
import arrow from '../arrow.png';
import marta from "../Marta.png";


export default function Train(props) {
    const  { DESTINATION, LINE,  DELAY, WAITING_TIME, STATION } = props;
    const [onTime, setOnTime] = useState("On Time");
    const [soon, setSoon] = useState( 'Green' );
    
    const checkOnTime = () => {
        if (DELAY === 'T0S') {
            setOnTime('Delayed');
            setSoon('Red');
        } else {
            setOnTime('On Time');
            setSoon('Green');
        }
    };

    useEffect(() => {
     checkOnTime()
    }, [])

 

    return (
        <div class = "horizontalMain">
            <div class = "leftPart">
            <img id = "martaIMG" src = {marta} alt = "marta"/>
            <div class = "trainInfo">
                <div class = "startdest">
                    <p id = "trainStops"> {STATION.toLowerCase()}  </p>
                    <img src = {arrow} alt = 'arrow' class = "arrow"/>
                    <p id = "destination"> {DESTINATION.toLowerCase()} </p>
                </div>
                <div id = "colorTime">
                    <p style = {{backgroundColor: LINE}} id = "lineColor"> {LINE} </p>
                    <p id = "isLate" style = {{ color: soon, fontWeight: 500, fontFamily: "sans-serif", fontSize: 16}}> {onTime} </p>
                </div>
            </div>
            </div>
            <div id = "timeRemaining">
                <div id = "number">
                <p style={{ color : soon}}> {WAITING_TIME} </p>
                </div>
            </div>
        </div> 
    );
    

}
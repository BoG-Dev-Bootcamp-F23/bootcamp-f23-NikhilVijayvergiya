import React from "react";
import { useState } from "react";
import arrow from '../arrow.png';
import currStation from "../pages/LinePages";


export default function Train(props) {
    const  {DESTINATION, LINE,  DELAY, WAITING_TIME } = props;
    const station =  'Chamblee';
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

 

    return (
        <div class = "horizontalMain">
            <div class = "leftPart">
            <img></img>
            <div class = "trainInfo">
                <div class = "startdest">
                    <p id = "trainStops"> {station}  </p>
                    <img src = {arrow} alt = 'arrow' class = "arrow"/>
                    <p id = "destination"> {DESTINATION} </p>
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
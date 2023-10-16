import React from "react";
import { useState } from "react";

export default function Train(props) {
    const  {DESTINATION, LINE,  DELAY, WAITING_TIME } = props;
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
            <img></img>
            <div class = "trainInfo">
                <p id = "trainStops"> CHAMBLEE ---- {DESTINATION} </p>
                <div id = "colorTime">
                    <p style = {{backgroundColor: LINE}} id = "lineColor"> {LINE} </p>
                    <p id = "isLate" style = {{ color: soon}}> {onTime} </p>
                </div>
            </div>
            <div id = "timeRemaining">
                <p style={{ color : soon}}> {WAITING_TIME} </p>
            </div>
        </div> 
    );
    

}
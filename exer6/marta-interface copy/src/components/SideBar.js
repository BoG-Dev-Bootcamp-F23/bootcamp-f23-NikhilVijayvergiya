import React from "react";



export default function SideBar(props) {

    const { stationData } = props;

    
    return (
        <div class = "sideBar">
            <p style = {{ color: 'white', marginLeft: 10}}> Select Starting Station </p>
            <div class = "stationList">
            {stationData?.map((station) => {
                return <div> <button onClick = {() => {props.setCurrStation(station.toUpperCase())}}> {station} </button></div>;
            })}
            </div>
            {/* <ul class = "stationList">
            <li> <button onClick={() => setStation("All Stations")}> All Stations </button> </li>
            <li> <button onClick={() => setStation("Chamblee")}> Chamblee </button> </li>
            <li> <button onClick={() => setStation("Brookhaven")}> Brookhaven </button> </li>
            <li> <button onClick={() => setStation("North Avenue")}> North Avenue </button> </li>
            <li> <button onClick={() => setStation("Airport")}>Airport</button></li>
            </ul> */}
        </div>



    );
}
import React from "react";



export default function SideBar(props) {

    const stations = props;
    
    return (
        <div class = "sideBar">
            <p style = {{ color: 'white', marginLeft: 10}}> Select Starting Station </p>
            {stations?.map((station) => {
                return <div> {station} </div>;
            })}
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
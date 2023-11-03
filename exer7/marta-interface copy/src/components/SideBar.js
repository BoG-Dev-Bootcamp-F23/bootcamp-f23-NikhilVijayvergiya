import React from "react";



export default function SideBar(props) {

    const { stationData } = props;

    
    return (
        <div class = "sideBar">
            <p style = {{ color: 'white', marginLeft: 10, fontWeight: 800}}> Select Starting Station </p>
            <div class = "stationList">
            {stationData?.map((station) => {
                return <div> <button onClick = {() => {props.setCurrStation(station.toUpperCase())}}> {station} </button></div>;
            })}
            </div>
        </div>



    );
}
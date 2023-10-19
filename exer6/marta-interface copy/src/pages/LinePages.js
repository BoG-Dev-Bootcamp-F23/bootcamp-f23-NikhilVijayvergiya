// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useEffect, useState } from "react";
import LineSelector from '../components/LineSelector';

const API_URL = "http://13.59.196.129:3001/arrivals/";

export default function LinesPage() {
    const[currColor, setColor] = useState("gold");
    const [currStation, setStation] = useState("Chamblee");
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(API_URL + currColor)
      .then(response => response.json())
      .then(data => setData(data))
    },[])
    

    return (
    <div id = "everything">
      <LineSelector></LineSelector>
      <div class = "trainColorHeading">
          {/* <img src ={martaLogo} alt = "Marta logo"/> */}
          <h1 class = "heading" style = {{fontWeight: 'bold'}}> {currColor} </h1>
      </div>
      <div class = "MainInfo">
        <div class = "sideBar">
          <p style = {{ color: 'white', marginLeft: 10}}> Select Starting Station </p>
          <ul class = "stationList">
            <li> <button onClick={() => setStation("All Stations")}> All Stations </button> </li>
            <li> <button onClick={() => setStation("Chamblee")}> Chamblee </button> </li>
            <li> <button onClick={() => setStation("Brookhaven")}> Brookhaven </button> </li>
            <li> <button onClick={() => setStation("North Avenue")}> North Avenue </button> </li>
            <li> <button onClick={() => setStation("Airport")}>Airport</button></li>
          </ul>
        </div>
        <div class = "rightSide">
          <NavBar class = "navBar" color={currColor} data={stationData} />
          <TrainList id = "LIST" color = {currColor} station = {currStation} />
        </div>
      </div>
    </div>
  );
}




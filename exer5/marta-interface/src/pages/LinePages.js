// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';

import { useState } from "react";

export default function LinesPage() {
    const[currColor, setColor] = useState("Gold");  
    return (
    <div>
      <div class = "trainColorHeading">
          <h1 style = {{fontWeight: 'bold'}}>{currColor} </h1>
      </div>
      <div class = "MainInfo">
      <div class = "sideBar">
        <p> Select Starting Station </p>
        <ul class = "stationList">
          <li> All Stations </li>
          <li> Chamblee </li>
          <li> Brookhaven </li>
          <li> North Avenue </li>
          <li> Airport </li>
        </ul>
      </div>
      <NavBar class = "navBar" color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      </div>
    </div>
  );
}




// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useEffect, useState } from "react";
import LineSelector from '../components/LineSelector';
import SideBar from '../components/SideBar';

const API_URL = "http://13.59.196.129:3001/arrivals/";

export default function LinesPage() {
    const[currColor, setColor] = useState("Gold");
    const [currStation, setStation] = useState("Chamblee");
    const [arrivalData, setArrivalData] = useState();
    const {stationData, setStationData } = useState();

    useEffect(() => {
      async function getArrivalData() {
        const res = await fetch(API_URL + "arrivals/" + currColor);
        const sData = res.json();
        setArrivalData(sData);
      }

      getArrivalData();
    }, currColor)

    useEffect(() => {
      async function getArrivalData() {
        const res = await fetch(API_URL + "stations/" + currColor);
        const sData = res.json();
        setStationData(sData);
      }

      getStationData();
    }, [])
    

    return (
    <div id = "everything">
      <LineSelector setColor = {setColor}/>
      <div class = "trainColorHeading">
          <h1 class = "heading" style = {{fontWeight: 'bold'}}> {currColor.toUpperCase()} </h1>
      </div>
      <div class = "MainInfo">
        <SideBar stationData = {stationData}/>
        <div class = "rightSide">
          <NavBar class = "navBar" color={currColor} data={stationData} />
          <TrainList id = "LIST" color = { currColor } arrivalData = {arrivalData} />
        </div>
      </div>
    </div>
  );
}




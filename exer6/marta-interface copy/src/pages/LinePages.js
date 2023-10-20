// get static data
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useEffect, useState } from "react";
import LineSelector from '../components/LineSelector';
import SideBar from '../components/SideBar';

const API_URL = "http://13.59.196.129:3001/";

export default function LinesPage() {
    const[currColor, setColor] = useState("GOLD");
    const [currStation, setCurrStation] = useState("Chamblee");
    const [arrivalData, setArrivalData] = useState();
    const [stationData, setStationData ] = useState();

    useEffect(() => {
      async function getArrivalData() {
        const res = await fetch(API_URL + "arrivals/" + currColor);
        const sData = await res.json();
        setArrivalData(sData);
      }

      getArrivalData();
      console.log(arrivalData)
    }, [currColor])

    useEffect(() => {
      async function getArrivalData() {
        const res = await fetch(API_URL + "arrivals/" + currColor);
        const sData = await res.json();
        const stationData = sData?.filter((arrival) => {
          return arrival.LINE  === currColor;
        });
        setArrivalData(sData);
      }

      getArrivalData();
      console.log(arrivalData)
    }, [currStation])

    useEffect(() => {
      async function getStationData() {
        const res = await fetch(API_URL + "stations/" + currColor);
        const aData = await res.json();
        setStationData(aData);
      }

      getStationData();
    }, [currColor])
    

    return (
    <div id = "everything">
      <LineSelector setColor = {setColor}/>
      <div class = "trainColorHeading">
          <h1 class = "heading" style = {{fontWeight: 'bold'}}> {currColor.toUpperCase()} </h1>
      </div>
      <div class = "MainInfo">
        <SideBar stationData = {stationData} setCurrStation = {setCurrStation} />
        <div class = "rightSide">
          <NavBar class = "navBar" color = { currColor } data = { stationData } />
          <TrainList id = "LIST" currColor = { currColor } arrivalData = { arrivalData } currStation = {currStation} />
        </div>
      </div>
    </div>
  );
}




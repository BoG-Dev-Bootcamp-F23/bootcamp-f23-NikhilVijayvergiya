// get static data
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useEffect, useState, useRef } from "react";
import LineSelector from '../components/LineSelector';
import SideBar from '../components/SideBar';

const API_URL = "http://13.59.196.129:3001/";

export default function LinesPage() {
    const[loading, setLoading] = useState(true);
    const[currColor, setColor] = useState("GOLD");
    const [currStation, setCurrStation] = useState();
    const [arrivalData, setArrivalData] = useState();
    const [stationData, setStationData ] = useState();
    const[direction, setDirection] = useState(false);
    const isInitialRender = useRef(true);
    const [headDirection, setHeadDirection] = useState();

    console.log(currStation);

    
    async function fetchArrivalData() {
      const res = await fetch(API_URL + "arrivals/" + currColor);
      const sData = await res.json();
      setArrivalData(sData)
      return sData;
  }

  useEffect(() => {
    setCurrStation(null);
    getArrivalStationData();
  }, [currColor]);

  async function getArrivalStationData() {
          const newArrivalData = await fetchArrivalData();
          if (!currStation) {
            setArrivalData(newArrivalData);
            setLoading(false);
          } else {
            const stationData2 = newArrivalData?.filter((arrival) => arrival.STATION === currStation + " STATION");
            setArrivalData(stationData2);
            setLoading(false);
          }
  }

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
      getArrivalStationData();
  }, [currStation]);

  useEffect(() => {
      if (currColor === "GREEN" || currColor === "BLUE") {
          setDirection(true);
      } else {
          setDirection(false);
      }

      async function fetchStationData() {
          const res = await fetch(API_URL + "stations/" + currColor);
          const aData = await res.json();
          setStationData(aData);

      }
      fetchStationData(currColor);

  }, [currColor]);


    return (
    <div id = "everything">
      <LineSelector setColor = {setColor}/>
      <div class = "trainColorHeading">
          <h1 class = "heading" style = {{fontWeight: 'bold'}}> {currColor.toUpperCase()} </h1>
      </div>
      <div class = "MainInfo">
        <SideBar stationData = {stationData} setCurrStation = {setCurrStation} />
        <div class = "rightSide">
          <NavBar class = "navBar" direction = {direction} setHeadDirection = {setHeadDirection}/>
          <TrainList id = "LIST" loading = { loading } currColor = { currColor } arrivalData = { arrivalData }/>
        </div>
      </div>
    </div>
  );



    }

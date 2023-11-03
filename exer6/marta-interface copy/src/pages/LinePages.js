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
    const [stationData, setStationData] = useState();
    const[direction, setDirection] = useState(false);
    const isInitialRender = useRef(true);
    const [arriving, setArriving] = useState(false);
    const [scheduled, setScheduled] = useState(false);
    const [eastbound, setEastbound] = useState(false);
    const [westbound, setWestbound] = useState(false);
    const [northbound, setNorthbound] = useState(false);
    const [southbound, setSoutbound] = useState(false);
    // const [headDirection, setHeadDirection] = useState();
    // const [arrivalTime, setArrivalTime] = useState();

    console.log(currStation);



    
    async function fetchArrivalData() {
      const res = await fetch(API_URL + "arrivals/" + currColor);
      const sData = await res.json();
      setArrivalData(sData)
      return sData;
  }

  useEffect(() => {
    // setArrivalTime();
    setCurrStation(null);
    setArriving(false);
    setScheduled(false);
    setEastbound(false);
    setSoutbound(false);
    setNorthbound(false);
    setWestbound(false);

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
          // } else if (!currStation) {
          //   const stationData2 = newArrivalData?.filter((arrival) => arrival.DIRECTION === headDirection);
          //   setArrivalData(stationData2);
          //   setLoading(false);
          // } else {
          //   const stationData2 = newArrivalData?.filter((arrival) =>  {
          //     return arrival.STATION === currStation + " STATION" && arrival.DIRECTION === headDirection;
          //   })
          //   setArrivalData(stationData2);
          //   setLoading(false);
          // }
  }

  useEffect(() => {
    // setArrivalTime();
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
      getArrivalStationData();
  }, [currStation, scheduled, arriving, westbound, northbound, southbound, eastbound]);

  useEffect(() => {
    // setArrivalTime();
    // setHeadDirection();
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

  const handleFilterChange = (filter, filterValue) => {
    if (filter === "arriving") {
      setArriving(filterValue);
    } else if (filter === "scheduled") {
      setScheduled(filterValue);
    } else if (filter === "eastbound") {
      setEastbound(filterValue);
    } else if (filter === "westbound") {
      setWestbound(filterValue);
    } else if (filter === "southbound") {
      setSoutbound(filterValue);
    } else if (filter === "northbound") {
      setNorthbound(filterValue);
    }
  };

    return (
    <div id = "everything">
      <LineSelector setColor = {setColor}/>
      <div class = "trainColorHeading">
          <h1 class = "heading" style = {{fontWeight: 'bold'}}> {currColor.toUpperCase()} </h1>
      </div>
      <div class = "MainInfo">
        <SideBar stationData = {stationData} setCurrStation = {setCurrStation} />
        <div class = "rightSide">
          <NavBar class = "navBar" direction = {direction} onChangeFilter = {handleFilterChange}
          scheduled = {scheduled}
          arriving = {arriving}
          northbound = {northbound}
          southbound = {southbound}
          westbound = {westbound}
          eastbound = {eastbound}
          />
          <TrainList id = "LIST" loading = { loading } currColor = { currColor } arrivalData = { arrivalData }
          scheduled = {scheduled}
          arriving = {arriving}
          northbound = {northbound}
          southbound = {southbound}
          westbound = {westbound}
          eastbound = {eastbound}/>
        </div>
      </div>
    </div>
  );



    }

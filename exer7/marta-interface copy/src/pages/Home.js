import { BrowserRouter, Route, Routes } from 'react-router-dom';
import martaHome from '../martaHome.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState } from 'react';

export default function Home(props) {
const { currColor, setColor } = props;
const navigate = useNavigate(); 


  return (
    <div className="homeScreen">
      <div className="homeHeader">
        <h1 id="MartaHeader">MARTA</h1>
        <button onClick={() => navigate('/About')} id="aboutMartaButton">
          <h2>About Marta</h2>
        </button>
      </div>
      <div className="homeMainBottom">
        <div className="routeSchedule">
          <h1 id="routeScheduleHeader">VIEW ROUTES SCHEDULE</h1>
          <button onClick={() => {setColor("RED"); navigate('/Red');}}> RED</button>
          <button onClick={() => {setColor("GREEN"); navigate('/Green');}}> GREEN</button>
          <button onClick={() => {setColor("BLUE"); navigate('/Blue');}}> BLUE</button>
          <button onClick={() => {setColor("GOLD"); navigate('/Gold');}}> GOLD</button>
        </div>
        <img id="mainImg" src={martaHome} alt="image" />
      </div>
    </div>
  );
}
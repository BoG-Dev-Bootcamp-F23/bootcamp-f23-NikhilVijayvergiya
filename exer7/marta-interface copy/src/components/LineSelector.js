import React from "react"
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function LineSelector(props) {
    const navigate  = useNavigate();
    

    return (
        <div class = "colorLine">
            <button onClick={() => navigate('/')}> Home </button>
            <button onClick={() => {
                props.setColor("RED");
            }}> Red </button>
            <button onClick={() => {
                props.setColor("GOLD");
            }}> Gold </button>
            <button onClick={() => {
                props.setColor("BLUE");
            }}> Blue </button>
            <button onClick={() => {
                props.setColor("GREEN");
            }}> Green </button>
        </div>
    );
}
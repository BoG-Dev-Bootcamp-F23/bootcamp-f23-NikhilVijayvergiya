import React from "react"
export default function LineSelector(props) {
    

    return (
        <div class = "colorLine">
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
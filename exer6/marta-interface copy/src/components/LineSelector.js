import React from "react"
export default function LineSelector(props) {
    

    return (
        <div class = "colorLine">
            <button onClick={() => {
                props.setColor("Red");
            }}> Red </button>
            <button onClick={() => {
                props.setColor("Red");
            }}> Gold </button>
            <button onClick={() => {
                props.setColor("Red");
            }}> Blue </button>
            <button onClick={() => {
                props.setColor("Red");
            }}> Green </button>
        </div>
    );
}
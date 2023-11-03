import React from "react";
import Train from "./Train";

export default function NavBar(props) {
    const { color } = props;

    return (
        <li class = "buttonList">
            <ul>
            <button> Arriving </button>
            </ul>
            <ul>
            <button> Scheduled </button>
            </ul>
            <ul>
            <button> Northbound </button>
            </ul>
            <ul>
            <button> Southbound </button>
            </ul>
        </li>
    );
    

}
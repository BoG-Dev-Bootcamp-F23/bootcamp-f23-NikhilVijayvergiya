import React from "react";
import Train from "./Train";

export default function NavBar(props) {
    console.log(props.direction);

    return (
        <ul class = "buttonList">
            <li> <button> Arriving </button> </li>
            <li>  <button> Scheduled </button> </li>
            <>
            {
                (props.direction) ? (
                    <React.Fragment>
                        <li><button onClick={props.setHeadDirection("E")}>Eastbound</button></li>
                        <li><button onClick={props.setHeadDirection("W")}>Westbound</button></li>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li><button onClick={props.setHeadDirection("N")}>Northbound</button></li>
                        <li><button onClick={props.setHeadDirection("S")}>Southbound</button></li>
                    </React.Fragment>
                )
                }
            </>
        </ul>
    );
    

}
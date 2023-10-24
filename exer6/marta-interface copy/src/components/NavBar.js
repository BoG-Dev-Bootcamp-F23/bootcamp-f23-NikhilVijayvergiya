import React from "react";
import Train from "./Train";

export default function NavBar(props) {
    const { scheduled, arriving, eastbound, westbound, northbound, southbound } = props;


    return (
        <ul class = "buttonList">
            <li>
            <button
                onClick={() => props.onChangeFilter("scheduled", !scheduled)}
                style={
                scheduled
                ? { backgroundColor: 'rgb(44, 44, 44)', color: 'white'  }
                : { backgroundColor: 'white' }
                }>
                Scheduled
                </button>
            </li>
            <li>
            <button
                onClick={() => props.onChangeFilter("arriving", !arriving)}
                style={
                arriving
                ? { backgroundColor: 'rgb(44, 44, 44)', color: 'white'  }
                : { backgroundColor: 'white' }
                }>
                Arriving
                </button>
            </li>
            <>
            {
                (props.direction) ? (
                    <React.Fragment>
                        <li>
                            <button
                                id="eastbound"
                                onClick={() => props.onChangeFilter("eastbound", !eastbound)}
                                style={
                                eastbound
                                    ? { backgroundColor: 'rgb(44, 44, 44)', color: 'white'  }
                                    : { backgroundColor: 'white' }
                                }>
                                Eastbound
                            </button>
                        </li>
                        <li>
                            <button
                                id="eastbound"
                                onClick={() => props.onChangeFilter("westbound", !westbound)}
                                style={
                                westbound
                                    ? { backgroundColor: 'rgb(44, 44, 44)', color: 'white' }
                                    : { backgroundColor: 'white' }
                                }>
                                Westbound
                            </button>
                        </li>

                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li>
                            <button
                                onClick={() => props.onChangeFilter("northbound", !northbound)}
                                style={
                                northbound
                                    ? { backgroundColor: 'rgb(44, 44, 44)', color: 'white'  }
                                    : { backgroundColor: 'white' }
                                }>
                                Northbound
                            </button>
                        </li>
                        <li>
                            <button
                                id="Southbound"
                                onClick={() => props.onChangeFilter("southbound", !southbound)}
                                style={
                                southbound
                                    ? { backgroundColor: 'rgb(44, 44, 44)', color: 'white'  }
                                    : { backgroundColor: 'white' }
                                }>
                                Southbound
                            </button>
                        </li>

                    </React.Fragment>
                )
                }
            </>
        </ul>
    );
    

}
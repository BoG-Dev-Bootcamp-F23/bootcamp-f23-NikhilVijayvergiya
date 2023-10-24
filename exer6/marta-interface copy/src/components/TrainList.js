import { useEffect, useState } from 'react';
import Train from './Train';

export default function TrainList(props) {
    const { loading, arrivalData, scheduled, arriving, eastbound, westbound, northbound, southbound } = props;
    console.log(arrivalData);


    const firstFilteredData = arrivalData?.filter((arrival) => {
        return (((scheduled && arrival.WAITING_TIME !== "Arriving") || (arriving && arrival.WAITING_TIME === "Arriving"))
        || (!scheduled && !arriving))});

    const filteredArrivalData = firstFilteredData?.filter((arrival) => {
        return (((eastbound && arrival.DIRECTION === "E") ||
        (westbound && arrival.DIRECTION === "W") ||
        (northbound && arrival.DIRECTION === "N") ||
        (southbound && arrival.DIRECTION === "S")) || 
        (!southbound && !northbound && !eastbound && 
            !westbound));
    });
        


    console.log(scheduled, arriving, eastbound, westbound, northbound, southbound);

    console.log(filteredArrivalData);



    // console.log(arrivalData)
    // const filteredArrivals = arrivalData?.filter((arrival) => {
    //     return arrival.LINE  === currColor;
    // });

    // useEffect(() => {

        //     if (arrivalTime === "A") {
        //         setFilteredArrivalData(arrivalData?.filter((arrival) => arrival.WAITING_TIME === "Arriving"));
        //     } else if (arrivalTime === "S") {
        //         setFilteredArrivalData(arrivalData?.filter((arrival) => arrival.WAITING_TIME !== "Arriving"));
        //     } 
        // }, [arrivalTime]);

        // console.log("filtered" + filteredArrivalData);


    return (
        <>
        {
            loading ? (
                <div className="loader-container">
                 <div className="loader"/>
                </div>
            ) : filteredArrivalData?.length === 0? (
                <div id="noData">No Trains Available</div>
            ) : (
                <div id="listTrains">
                {filteredArrivalData?.map((arrival) => (
                    <Train {...arrival} />
                ))}
                </div>
            )
            }

        </>

    );
    
}
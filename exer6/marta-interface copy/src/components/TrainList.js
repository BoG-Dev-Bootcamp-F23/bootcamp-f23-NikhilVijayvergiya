import Train from './Train';

export default function TrainList(props) {
    const { loading, arrivalData } = props;
    console.log(arrivalData);

    // const filteredArrivals = arrivalData?.filter((arrival) => {
    //     return arrival.LINE  === currColor;
    // });

    return (
        <>
        
        {
            loading ? (
                <div className="loader-container">
                 <div className="loader"/>
                </div>
            ) : !arrivalData? (
                <div id="noData">No Trains Available</div>
            ) : (
                <div id="listTrains">
                {arrivalData.map((arrival) => (
                    <Train {...arrival} />
                ))}
                </div>
            )
            }

        </>

    );
    
}
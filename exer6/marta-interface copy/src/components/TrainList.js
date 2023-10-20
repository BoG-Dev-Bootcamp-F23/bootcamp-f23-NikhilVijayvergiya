import Train from './Train';

export default function TrainList(props) {
    const { currColor, arrivalData, currStation } = props;
    console.log(currStation);

    const filteredArrivals = arrivalData?.filter((arrival) => {
        return arrival.LINE  === currColor;
    });

    return (
        
        <div id = "listTrains">
            {filteredArrivals?.map((arrival) => (
                <Train {...arrival} station = {currStation} />
            ))}
        </div>
    );
    
}
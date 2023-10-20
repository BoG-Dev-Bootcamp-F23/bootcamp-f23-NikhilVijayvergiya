import Train from './Train';

export default function TrainList(props) {
    const { color, arrivalData } = props;


    const filteredArrivals = arrivals.RailArrivals.filter( 
        (arrival) => 
            arrival.LINE === 'GOLD'
    );

    

    return (
        <div id = "listTrains">
            {filteredArrivals.map((arrival, index) => (
                <Train {...arrival} station = {currStation}  />
            ))}
        </div>
    );
    
}
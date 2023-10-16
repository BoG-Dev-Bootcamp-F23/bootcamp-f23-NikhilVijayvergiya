import Train from './Train';
import arrivals from '../server/trainData';

export default function TrainList(props) {
    const { color } = props;

    const filteredArrivals = arrivals.RailArrivals.filter( 
        (arrival) => 
            arrival.LINE === 'GOLD'
    );

    

    return (
        <div>
            {filteredArrivals.map((arrival, index) => (
                <Train {...arrival} />
            ))}
        </div>
    );
    
}
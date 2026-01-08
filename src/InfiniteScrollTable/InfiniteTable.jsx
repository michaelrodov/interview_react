import { useMemo, useState } from "react";
import { Button } from "../App.styled.jsx";

const OneRecord = ({item}) => {
    const itemColumnsList = Object.entries(item).map(([key, value]) => (<td className={`td_${key}`}>{value}</td>))
    return(
        <tr>{itemColumnsList}</tr>
    );
}

export const InfiniteScrollList = ({data}) => {
    const NUMBER_OF_RECORDS_TO_LOAD = 5;
    const [startInx, setStartInx] = useState(0);
    
    const isLastPage = startInx + NUMBER_OF_RECORDS_TO_LOAD >= data.length;

    //  attention! shallow copy so objects are ref by pointer
    const displayedData = useMemo(() => {
        const endIndex = startInx + NUMBER_OF_RECORDS_TO_LOAD;
        return data.slice(0, (endIndex > data.length) ? data.length : endIndex);
    },[data, startInx]);

    // Component implementation
    // todo protect from empty data
    const headers = Object.keys(data[0]).map((key) => (<th className={key}>{key}</th>));

    return (
        <div>
            <table>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {displayedData.map((item, index) => (
                    <OneRecord key={index} item={item} />
                ))}
            </tbody>
            </table>
            <Button 
                onClick={() => setStartInx(startInx + NUMBER_OF_RECORDS_TO_LOAD)} 
                disabled={isLastPage}
            >
                Load Next
            </Button>
        </div>
    );
}
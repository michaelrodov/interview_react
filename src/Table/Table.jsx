import { useMemo, useState, useRef } from "react";
import { Button } from "../App.styled.jsx";

const NUMBER_OF_RECORDS_TO_LOAD = 5;
const OneRecord = ({item}) => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    const itemColumnsList = Object.entries(item).map(([key, value]) => (
        <td key={key} className={`td_${key}`}>
            {key === 'id' ? (
                <>
                    {value}
                    <span style={{ fontSize: '10px', color: 'red', marginLeft: '8px' }}>
                        (renders: {renderCount.current})
                    </span>
                </>
            ) : (
                value
            )}
        </td>
    ))
    return(
        <tr>{itemColumnsList}</tr>
    );
}

export const Table = ({isLoading, data}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    //  attention! shallow copy so objects are ref by pointer
    const displayedData = useMemo(() => {        
        return data;
    },[data]);

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
        </div>
    );
}
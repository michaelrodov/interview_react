import { useMemo, useState, useRef } from "react";
import { Button } from "../App.styled.jsx";


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
    const [ren, setRen] = useState(0);
    
    const headers = Object.keys(data[0]).map((key) => { 
        return (
                <th className={key}>{key}</th>
            )
            }
        );

    return (
        <div>
            <Button onClick={() => { setRen(ren + 1); }}>just button</Button>
            <table>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <OneRecord item={item} />
                ))}
            </tbody>
            </table>
        </div>
    );
}
import React from 'react';
const Statistics = ({good,neutral, bad, total,positive}) => {
    return (
        <>
            <span>Good: { good} </span>
            <span>Neutral: { neutral} </span>
            <span>Bad: { bad} </span>
            <span>Total: { total} </span>
            <span>Positive: { positive} %</span>
        </>
    );
}

export default Statistics;
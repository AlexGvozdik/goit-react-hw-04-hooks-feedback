import React from 'react';
import PropTypes from 'prop-types'
const FeedBackOpt = ({onLeaveFeedback,btnNames,reset}) => {
    return (
        <>
            {btnNames.map(btn => (
                <button
                    key={btn}
                    type="button"
                    name={btn}
                    onClick={()=>onLeaveFeedback(btn)}
                >
                    {btn}
                </button>
            ))}
            <button onClick={reset}>Reset</button>
        </>
    );
}

FeedBackOpt.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    btnNames:PropTypes.array.isRequired,
}

export default FeedBackOpt;
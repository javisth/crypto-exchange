import React from 'react';

const Recommendation = (props) => {
    const value = typeof parseInt(props.value) === 'number' && !isNaN(parseInt(props.value)) ? Math.round(parseInt(props.value)) : props.value;
    return (
        <div className="card mr-0 custom-card">
            <div className="card-body">
                Recommendation:<br/>
                {value<1?'Buy':'Sell'}
            </div>  
        </div>
    )
};

  export default Recommendation;
import React from 'react';
let value=0;
let val2 = 0;
const Recommendation = (props) => {
    if(typeof props.value == "string"){
        val2 = parseInt(props.value);
    }
    else{
        value = typeof parseInt(props.value) === 'number' && !isNaN(parseInt(props.value)) ? Math.round(parseInt(props.value)) : props.value;
    }
    return (
        <div className="card mr-0 custom-card">
            <div className="card-body">
                Recommendation:<br/>
                {console.log(val2)}
                {console.log(value)}
                {val2<value?'Buy':'Sell'}
            </div>  
        </div>
    )
};

  export default Recommendation;

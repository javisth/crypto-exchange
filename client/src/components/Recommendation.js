import React from "react";

const Recommendation = (props) => {
  return (
    <div className="card mr-0 custom-card">
      <div className="card-body">
        Recommendation:
        <br />
        {console.log("---value1: ", props.value1)}
        {console.log("---value2: ", props.value2)}
        {props.value1 < props.value2 ? "Buy" : "Sell"}
      </div>
    </div>
  );
};

export default Recommendation;

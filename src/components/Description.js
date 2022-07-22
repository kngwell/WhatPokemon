import React from "react";

const Description = ({ heightpok, weightpok, pokgen }) => {
  return (
    <div className="desc">
      <p>
        <b>Height</b> is <b>{heightpok * 10} cm.</b>
      </p>

      <p>
        <b>Weight</b> is <b>{weightpok * 0.1} kg</b>
      </p>

      <p>
        <b>Generation : {pokgen}</b>
      </p>
    </div>
  );
};

export default Description;

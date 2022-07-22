import React from "react";

const Description = ({ heightpok, weightpok }) => {
  return (
    <div className="desc">
      <p>
        <b>Height:</b> <b>{heightpok * 10} in</b>
      </p>

      <p>
        <b>Weight:</b> <b>{weightpok * 0.1} lbs</b>
      </p>
    </div>
  );
};

export default Description;

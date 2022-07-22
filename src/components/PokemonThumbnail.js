import React, { useState } from "react";
import Description from "./Description";

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  generation,
}) => {
  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Type : {type}</small>
        <button className="pokeinfo" onClick={() => setShow(!show)}>
          {show === true ? "Know less..." : "Know more..."}
        </button>
        {show === true ? (
          <Description
            weightpok={weight}
            heightpok={height}
            pokgen={generation}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PokemonThumbnail;

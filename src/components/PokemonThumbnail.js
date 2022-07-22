import React, { useState } from "react";
import Description from "./Description";

const PokemonThumbnail = ({ id, name, image, type, height, weight }) => {
  const style = `poke-thumbnails`;
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
          {show === true ? "About" : "About"}
        </button>
        {show === true ? (
          <Description weightpok={weight} heightpok={height} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PokemonThumbnail;

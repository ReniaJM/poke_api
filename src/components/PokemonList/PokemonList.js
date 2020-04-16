import React from "react";


const PokemonList = (props) => {
    return (
      <div className="card" style={{width: "10rem"}}>
        <img className="card-img-top" src={props.sprites.front_default} alt="image"/>
          <div className="card-body text-center">
            <p className="card-text">{props.name}</p>
            {props.types.map(
              typeObject =>
                typeObject.type.name === props.type ? (
                  <div key={typeObject.type.name}>
                    {typeObject.type.name}
                  </div>
                ) : (
                  <div key={typeObject.type.name}>
                    {typeObject.type.name}
                  </div>
                )
            )}
          </div>
      </div>
    )
};

export default PokemonList;


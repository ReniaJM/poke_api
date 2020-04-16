import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


export const Image = styled.img`
   background-color: #fff;
   margin: 1rem;
   text-align: center;
   flex: 1 0 1rem;
   border: 1px solid #ced4da;
   border-radius: 50rem;
   color: #fff;
`;

export const Card = styled.div`
   background-color: rgba(0, 0, 0, .04);
   margin: 1rem;
   text-align: center;
   flex: 1 0 10rem;
   border: 1px solid #ced4da;
   border-radius: .25rem;
   padding-bottom: 1rem;
   
`;

export const Name = styled.p`
   background-color: #007bff;
   margin: 1rem;
   text-align: center;
   flex: 1 0 1rem;
   border: 1px solid #ced4da;
   border-radius: .25rem;
   color: #fff;
   text-transform: uppercase;
`;

export const CardText = styled.p`
   background-color: #ffc107;
   margin: 1rem;
   text-align: center;
   flex: 1 0 1rem;
   border: 1px solid #ced4da;
   border-radius: .25rem;
   color: #fff;
`;

const PokemonList = (props) => {
    return (
      <Card>
        <Image src={props.sprites.front_default} alt="image"/>
          <div className="card-body text-center">
            <Name>{props.name}</Name>
            {props.types.map(
              typeObject =>
                typeObject.type.name === props.type ? (
                  <CardText key={typeObject.type.name}>
                    {typeObject.type.name}
                  </CardText>
                ) : (
                  <CardText key={typeObject.type.name}>
                    {typeObject.type.name}
                  </CardText>
                )
            )}
          </div>
      </Card>
    )
};

PokemonList.propTypes = {
  name: PropTypes.string.isRequired,
  sprites: PropTypes.object.isRequired,
  types: PropTypes.array.isRequired,

};

export default PokemonList;


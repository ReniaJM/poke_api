import React from "react";
// import CommentContainer from "../../container/CommentContainer";
import "./comments.css";
import PropTypes from "prop-types";

const CommentList = (props) => {
    return (
      <div key={props.name}>
          <div>
              <img src={props.sprites.front_default} alt="picture"/>
          </div>
          <div>
              <div >{props.name}</div>
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

// CommentList.propTypes = {
//     comment: PropTypes.array.isRequired,
//     email: PropTypes.string.isRequired,
// };


export default CommentList;


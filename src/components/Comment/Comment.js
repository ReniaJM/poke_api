import React from "react";
import "./comment.css";
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <>


                <div>
                    <div style={{color:"red"}}>{props.name}</div>


                </div>


        </>
    );
};

// Comment.propTypes = {
//     id: PropTypes.number.isRequired,
//     postId: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
// };

export default Comment;



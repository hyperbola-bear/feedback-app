import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //conditional class for reverse
  //return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //conditional style for reverse
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

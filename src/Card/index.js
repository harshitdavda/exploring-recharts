import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h5 className="card-title">{props.title}</h5>
      {props.subTitle ? <p className="card-subtite">{props.subTitle}</p> : null}
      {props.children}
    </div>
  );
}

export default Card;

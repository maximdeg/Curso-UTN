import React from "react";

export const RowArticle = props => {
  return (
    <>
      <div>
        <div>
          <h3>{props.titulo}</h3>
          <a>{props.direccion_author}</a>
        </div>
        <div>
          <span>{props.fecha}</span>
        </div>
      </div>
    </>
  );
};

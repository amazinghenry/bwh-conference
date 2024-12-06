import React from "react";
import speakerData from "../../data/index.js";
import "./convener.css";

const convener = speakerData[0];

const Convener = () => {
  return (
    <section className="convenerContainer">
      <h2 className="text-center">Convener</h2>
      <div className="ConvenerGroup">
        {convener ? (
          <div className="ConvenerItem" key={convener.id}>
            <img
              src={`./images/${convener.imageUrl}`}
              alt={convener.title || "Covener"}
              className="img-fluid"
            />
            <div className="convenerTitle">{convener.title}</div>
            <div className="convenerPosition">{convener.position}</div>
            <div className="convenerPosition">{convener.company}</div>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
};

export default Convener;

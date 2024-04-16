import React from "react";
import NotLoading from "../NotLoading.gif"

export default function Card(props) {
  function formatDateTime(dateTimeString) {
    const dateObject = new Date(dateTimeString);
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',             
    };
    return dateObject.toLocaleDateString('en-US', options);
  }


  return (
    <main className="card-whole neu">
      <div className={"Card" + " " + props.currentMode}>
        <div className="Block1">
          <a href={props.url}>
            <img
              src={props.NewsImage ? props.NewsImage : NotLoading}
              className="pics"
              alt={` By ${props.Author}`}
            />{" "}
          </a>
          <p className="title">{props.NewsTitle}</p>
        </div>
        <div className="Block2">
          <a className="button2" href={props.url}>
            Read More
          </a>
        </div>

        <div className="Block3">
          <p>{`${formatDateTime(props.NewsDate)}`}</p>
          <p>{props.Author}</p>
        </div>
      </div>
    </main>
  );
}

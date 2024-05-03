import React, { Component } from "react";
import './card.css'
class Card extends Component {
  render(props) {
    const {image, title, director, year } = this.props.data;
    return (
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <img src={image} style={{ width: "100%", height: "500px", objectFit: "contain" }} className="card-img-top mb-2" alt="..."/>
            <h5 className="card-title">
              {title.length > 30 ? title.slice(0, 30) + "..." : title}
            </h5>
            <p className="card-text">{director}</p>
            <h1 href="#" className="">
              {year}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

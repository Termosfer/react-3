import React, { Component } from "react";

class Card extends Component {
  render(props) {
    const { title, director, year } = this.props.data;
    return (
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
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

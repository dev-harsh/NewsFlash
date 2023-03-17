import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, image, newsurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              image
                ? image
                : "https://www.hindustantimes.com/ht-img/img/2023/03/17/550x309/Breaking_1679011346635_1679011368199_1679011368199.jpg"
            }
            className="card-img-top"
            alt="N/A"
          />
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,45):"No Title"}...</h5>
            <p className="card-text">{description?description.slice(0,88):"No Description"}...</p>
            <a href={newsurl} target="blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
